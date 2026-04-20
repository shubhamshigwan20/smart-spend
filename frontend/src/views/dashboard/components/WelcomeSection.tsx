import aiInsightsIcon from "../../../assets/ai_insights_icon.png";

type WelcomeSectionProps = {
  userName: string;
  aiSmartInsightsMessages: string[];
};

const WelcomeSection = (props: WelcomeSectionProps) => {
  const { userName, aiSmartInsightsMessages } = props;
  return (
    <div className="w-full h-[156px] flex justify-between gap-[24px]">
      <div className="w-[64%] flex-col">
        <p className="font-inter font-bold text-[2.5rem] leading-[2.5rem] tracking-[-0.0625rem]">
          Good Morning, {userName}.
        </p>
        <p className="font-inter font-medium text-[1rem] leading-[1.5rem] tracking-[0rem]">
          Your financial vault is secure. Here's your summary for October.
        </p>
      </div>
      <div className="w-[33%] flex gap-[16px] p-[24px] bg-[#4F46E5] rounded-[12px]">
        <div className="w-[38px] h-[38px]">
          <img src={aiInsightsIcon} width="38px" height="38px" alt="" />
        </div>
        <div className="flex-col gap-[4px]">
          <p className="font-inter font-bold text-xs leading-4 tracking-[0.075rem] text-white">
            AI SMART INSIGHTS
          </p>
          <ul className="list-disc pl-5">
            {aiSmartInsightsMessages?.map((insight) => (
              <li className="font-inter font-medium text-sm leading-5 tracking-normal text-white">
                {insight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
