import React from "react";

const SummaryCards = () => {
  return (
    <div className="w-full h-[163px] flex justify-between">
      <div className="w-[23%] flex-col bg-[#FFFFFF] pl-[24px] pr-[24px] pt-[24px] pb-[44px] rounded-[12px] border border-1 border-red-200">
        <div className="w-full h-[15px]">
          <p className="font-inter font-bold text-[0.625rem] leading-[0.9375rem] tracking-[0.0625rem] text-[#94A3B8]">
            TOTAL BALANCE
          </p>
        </div>
        <div className="w-full h-[44px]">
          <p className="font-inter font-bold text-[1.875rem] leading-[2.25rem]">
            25,000
          </p>
        </div>
        <div className="w-full h-[20px]"></div>
      </div>
      <div className="w-[23%] flex-col bg-[#FFFFFF] pl-[24px] pr-[24px] pt-[24px] pb-[44px] rounded-[12px] border border-1 border-green-200">
        hello
      </div>
      <div className="w-[23%] flex-col bg-[#FFFFFF] pl-[24px] pr-[24px] pt-[24px] pb-[44px] rounded-[12px] border border-1 border-blue-200">
        hello
      </div>
      <div className="w-[23%] flex-col bg-[#FFFFFF] pl-[24px] pr-[24px] pt-[24px] pb-[44px] rounded-[12px] border border-1 border-yellow-200">
        hello
      </div>
    </div>
  );
};

export default SummaryCards;
