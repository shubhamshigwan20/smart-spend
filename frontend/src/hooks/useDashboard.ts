import { useState, useEffect } from "react";
import api from "../api/api";
import {
  GET_SUMMARY,
  GET_MONEY_TREND,
  GET_CATEGORY_BREAKDOWN,
  GET_EXPENSES,
  GET_ALERTS,
  GET_INSIGHTS,
} from "../utils/endpoints";

const useDashboard = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [aiInsights, setAiInsights] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [stats, setStats] = useState([
    {
      label: "Total Balance",
      value: "₹0",
      trend: "",
      // trendIcon: TrendingUp,
    },
    { label: "Monthly Spend", value: "₹0", progress: 0 },
    {
      label: "Subscriptions",
      value: "0 Active",
      avatars: [],
    },
    {
      label: "Upcoming Bills",
      value: "₹0",
      subtext: "0 bills due this week",
      subtextColor: "text-orange-600",
    },
  ]);
  const [trendData, setTrendData] = useState([]);
  const [trendType, setTrendType] = useState<"week" | "month">("month");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchTrendData = async () => {
      try {
        const moneyTrendPromise = await api.get(GET_MONEY_TREND(trendType), {
          signal: controller.signal,
        });
        setTrendData(moneyTrendPromise.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrendData();
    return () => {
      return controller.abort();
    };
  }, [trendType]);

  useEffect(() => {
    //all api calls to load data
    const controller = new AbortController();

    const fetchData = async () => {
      const summaryDataPromise = api.get(GET_SUMMARY, {
        signal: controller.signal,
      });
      const categoryBreakdownPromise = api.get(GET_CATEGORY_BREAKDOWN, {
        signal: controller.signal,
      });
      const expenseDataPromise = api.get(GET_EXPENSES(5, 10), {
        signal: controller.signal,
      });
      const alertsPromise = api.get(GET_ALERTS, {
        signal: controller.signal,
      });
      const insightsPromise = api.get(GET_INSIGHTS, {
        signal: controller.signal,
      });
      const promisesArray = [
        summaryDataPromise,
        categoryBreakdownPromise,
        expenseDataPromise,
        alertsPromise,
        insightsPromise,
      ];
      const results = await Promise.allSettled(promisesArray);

      results.forEach((result, idx) => {
        if (result.status === "fulfilled") {
          const resultData = result.value.data;

          switch (idx) {
            case 0:
              setStats(resultData);
              break;

            case 1:
              setCategoryData(resultData);
              break;

            case 2:
              setTransactions(resultData);
              break;

            case 3:
              setAlerts(resultData);
              break;

            case 4:
              setAiInsights(resultData);
              break;
          }
        }
      });
      setLoader(false);
    };
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoader(true);
      fetchData();
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
    return () => {
      return controller.abort();
    };
  }, []);

  return {
    loader,
    aiInsights,
    alerts,
    transactions,
    stats,
    trendData,
    trendType,
    categoryData,
    setTrendType,
  };
};

export default useDashboard;
