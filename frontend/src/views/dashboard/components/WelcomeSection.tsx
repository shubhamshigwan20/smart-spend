// import aiInsightsIcon from "../../../assets/ai_insights_icon.png";
import { Sparkles } from "lucide-react";

type WelcomeSectionProps = {
  userName: string;
};

const WelcomeSection = (props: WelcomeSectionProps) => {
  const { userName } = props;
  return (
    <section className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <h2 className="text-[2.5rem] font-bold tracking-tight text-slate-900 leading-none mb-2">
          Good morning, {userName}.
        </h2>
        <p className="text-slate-500 font-medium">
          Your financial vault is secure. Here's your summary for October.
        </p>
      </div>

      <div className="lg:w-1/3 bg-gradient-to-br from-[#3525cd] to-[#4f46e5] text-white p-6 rounded-2xl shadow-xl shadow-indigo-200/50 relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        <div className="flex items-start gap-4 relative z-10">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
            <Sparkles size={20} fill="currentColor" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">
              AI Smart Insights
            </p>
            <ul className="text-sm space-y-2 font-medium">
              <li className="flex items-center gap-2">
                • You spent 30% more on food this week.
              </li>
              <li className="flex items-center gap-2">
                • Suggestion: Cancel 2 unused subscriptions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
