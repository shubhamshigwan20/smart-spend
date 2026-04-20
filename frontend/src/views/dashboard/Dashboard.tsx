import WelcomeSection from "./components/WelcomeSection";
import SummaryCards from "./components/SummaryCards";
import ChartsSection from "./components/ChartsSection";
import BottomSection from "./components/BottomSection";

const Dashboard = () => {
  const aiSmartInsightsMessages = [
    "You spent 30% more on food this week.",
    "Suggestions: Cancel 2 unused subscriptions.",
  ];
  return (
    <div className="w-full flex-col p-[32px] gap-[32px] border border-1 border-blue-100">
      <WelcomeSection
        userName="Alex"
        aiSmartInsightsMessages={aiSmartInsightsMessages}
      />
      <SummaryCards />
      <ChartsSection />
      <BottomSection />
    </div>
  );
};

export default Dashboard;
