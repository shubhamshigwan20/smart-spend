/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import WelcomeSection from "./components/WelcomeSection";
import SummaryCards from "./components/SummaryCards";
import ChartsSection from "./components/ChartsSection";
import BottomSection from "./components/BottomSection";
import {
  TrendingUp,
  ShoppingBag,
  Utensils,
  Car,
  AlertTriangle,
  Info,
  History,
} from "lucide-react";
import {
  GET_ALERTS,
  GET_CATEGORY_BREAKDOWN,
  GET_EXPENSES,
  GET_INSIGHTS,
  GET_MONEY_TREND,
  GET_SUMMARY,
} from "../../utils/endpoints";
import api from "../../api/api";

const Dashboard = () => {
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

  // const trendData = [
  //   { day: "01", amount: 1200 },
  //   { day: "05", amount: 1800 },
  //   { day: "10", amount: 1100 },
  //   { day: "15", amount: 2600 },
  //   { day: "20", amount: 1500 },
  //   { day: "25", amount: 2200 },
  //   { day: "30", amount: 1400 },
  // ];

  // const categoryData = [
  //   { name: "Shopping", value: 45, color: "#3525cd" },
  //   { name: "Food & Drinks", value: 30, color: "#58579b" },
  //   { name: "Other", value: 25, color: "#e2e8f0" },
  // ];

  // const stats = [
  //   {
  //     label: "Total Balance",
  //     value: "₹25,000",
  //     trend: "+12% vs last month",
  //     trendIcon: TrendingUp,
  //   },
  //   { label: "Monthly Spend", value: "₹12,450", progress: 65 },
  //   {
  //     label: "Subscriptions",
  //     value: "12 Active",
  //     avatars: ["NF", "PR", "SP", "+9"],
  //   },
  //   {
  //     label: "Upcoming Bills",
  //     value: "₹3,200",
  //     subtext: "3 bills due this week",
  //     subtextColor: "text-orange-600",
  //   },
  // ];

  // const transactions = [
  //   {
  //     recipient: "Apple Store",
  //     sub: "Hardware purchase",
  //     category: "Technology",
  //     date: "Oct 24, 2023",
  //     amount: "₹89,900",
  //     icon: ShoppingBag,
  //     color: "text-indigo-600",
  //     bg: "bg-indigo-50",
  //   },
  //   {
  //     recipient: "Starbucks Coffee",
  //     sub: "Dining",
  //     category: "Food",
  //     date: "Oct 23, 2023",
  //     amount: "₹450",
  //     icon: Utensils,
  //     color: "text-orange-600",
  //     bg: "bg-orange-50",
  //   },
  //   {
  //     recipient: "Uber India",
  //     sub: "Transport",
  //     category: "Travel",
  //     date: "Oct 22, 2023",
  //     amount: "₹1,240",
  //     icon: Car,
  //     color: "text-slate-600",
  //     bg: "bg-slate-100",
  //   },
  // ];

  // const alerts = [
  //   {
  //     title: "Netflix charge in 2 days",
  //     sub: "Amount: ₹649.00. High usage detected this month.",
  //     icon: AlertTriangle,
  //     color: "bg-orange-50 text-orange-900 border-orange-400",
  //   },
  //   {
  //     title: "Savings Goal Reached!",
  //     sub: "You've saved 15% more than last October.",
  //     icon: Info,
  //     color: "bg-indigo-50 text-indigo-900 border-indigo-400",
  //   },
  //   {
  //     title: "Rent Paid",
  //     sub: "Successfully transferred on Oct 01.",
  //     icon: History,
  //     color: "bg-slate-50 text-slate-800 border-slate-400 opacity-60",
  //   },
  // ];

  // const aiInsights = [
  //   "You spent 30% more on food this week.",
  //   "Suggestion: Cancel 2 unused subscriptions.",
  // ];

  useEffect(() => {
    //all api calls to load data

    const fetchData = async () => {
      const summaryDataPromise = await api.get(GET_SUMMARY);
      const categoryBreakdownPromise = await api.get(GET_CATEGORY_BREAKDOWN);
      const moneyTrendPromise = await api.get(GET_MONEY_TREND(trendType));
      const expenseDataPromise = await api.get(GET_EXPENSES(5, 10));
      const alertsPromise = await api.get(GET_ALERTS);
      const insightsPromise = await api.get(GET_INSIGHTS);
      const promisesArray = [
        summaryDataPromise,
        categoryBreakdownPromise,
        moneyTrendPromise,
        expenseDataPromise,
        alertsPromise,
        insightsPromise,
      ];
      const results = await Promise.allSettled(promisesArray);

      results.forEach((result, idx) => {
        if (result.status === "fulfilled") {
          const resultData = result.value.data;

          switch (idx) {
            case 1:
              setStats(resultData);
              break;

            case 2:
              setCategoryData(resultData);
              break;

            case 3:
              setTrendData(resultData);
              break;

            case 4:
              setTransactions(resultData);
              break;

            case 5:
              setAlerts(resultData);
              break;

            case 6:
              setAiInsights(resultData);
              break;
          }
        }
      });
    };
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoader(true);
      fetchData();
      setLoader(false);
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
    return () => {
      //abort controller
    };
  }, []);
  return (
    <div className="w-full flex-col p-[32px] gap-[32px]">
      <WelcomeSection aiInsights={aiInsights} />
      <SummaryCards stats={stats} />
      <ChartsSection
        trendData={trendData}
        categoryData={categoryData}
        trendType={trendType}
        setTrendType={setTrendType}
      />
      <BottomSection transactions={transactions} alerts={alerts} />
    </div>
  );
};

export default Dashboard;
