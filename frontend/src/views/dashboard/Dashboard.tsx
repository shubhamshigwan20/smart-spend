import WelcomeSection from "./components/WelcomeSection";
import SummaryCards from "./components/SummaryCards";
import ChartsSection from "./components/ChartsSection";
import BottomSection from "./components/BottomSection";
import useDashboard from "../../hooks/useDashboard";

const Dashboard = () => {
  const {
    aiInsights,
    alerts,
    transactions,
    stats,
    trendData,
    trendType,
    categoryData,
    setTrendType,
  } = useDashboard();

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
