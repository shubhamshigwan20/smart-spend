import React from "react";
import { cn } from "../../../utils/helper";

import { TrendingUp } from "lucide-react";

type SummaryCard = {
  label: string;
  value: string;
  trend?: string;
  trendIcon?: string;
  progress?: number;
  avatars?: string[];
  subtext?: string;
  subtextColor: string;
};

type SummaryCardsProps = {
  stats: SummaryCard[];
};

const SummaryCards = (props: SummaryCardsProps) => {
  const { stats } = props;
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat: SummaryCard) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50 transition-all hover:shadow-md hover:-translate-y-1 cursor-default"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
            {stat.label}
          </p>
          <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            {stat.value}
          </h3>
          {stat.trend && (
            <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-sm">
              <TrendingUp size={14} />
              <span>{stat.trend}</span>
            </div>
          )}
          {stat.progress !== undefined && (
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-4">
              <div
                className="bg-indigo-600 h-full"
                style={{ width: `${stat.progress}%` }}
              />
            </div>
          )}
          {stat.avatars && (
            <div className="flex -space-x-2 mt-4">
              {stat.avatars.map((text, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2 border-white text-[10px] font-bold",
                    text === "NF"
                      ? "bg-red-100 text-red-600"
                      : text === "PR"
                        ? "bg-blue-100 text-blue-600"
                        : text === "SP"
                          ? "bg-green-100 text-green-600"
                          : "bg-slate-100 text-slate-500",
                  )}
                >
                  {text}
                </div>
              ))}
            </div>
          )}
          {stat.subtext && (
            <p className={cn("text-xs font-semibold mt-2", stat.subtextColor)}>
              {stat.subtext}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default SummaryCards;
