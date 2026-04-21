import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";

type Trend = {
  day: string;
  amount: number;
};

type Category = {
  name: string;
  value: number;
  color: string;
};

type ChartsSectionProps = {
  trendData: Trend[];
  categoryData: Category[];
  trendType: "week" | "month";
  setTrendType: (trend: "week" | "month") => void;
};

const ChartsSection = (props: ChartsSectionProps) => {
  const { trendData, categoryData, trendType, setTrendType } = props;

  const getTotalAmount = () => {
    let total = 0;

    categoryData.forEach((category) => {
      total += category.value;
    });

    return total;
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6">
      {/* Trend Chart */}
      <div className="lg:w-[70%] bg-white dark:bg-[#1F2937] p-8 rounded-2xl shadow-sm border border-slate-50 dark:border-slate-700">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Spending Trend</h4>
            <p className="text-sm text-slate-500 font-medium">
              Net expenditure flow across 30 days
            </p>
          </div>
          <div className="flex gap-2 p-1 bg-slate-50 rounded-xl">
            <button
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${trendType === "week" ? "bg-indigo-600 dark:bg-[#4F46E5] text-white shadow-lg shadow-indigo-200" : "text-slate-500 hover:text-slate-900 "}`}
              onClick={() => setTrendType("week")}
            >
              WEEK
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${trendType === "month" ? "bg-indigo-600 dark:bg-[#4F46E5] text-white shadow-lg shadow-indigo-200" : "text-slate-500 hover:text-slate-900 "}`}
              onClick={() => setTrendType("month")}
            >
              MONTH
            </button>
          </div>
        </div>
        <div className="h-[300px] w-full">
          {trendData.length ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                  labelStyle={{ fontWeight: 700 }}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorAmount)"
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p>No Data Found</p>
            </div>
          )}
        </div>
      </div>

      {/* Category Split */}
      <div className="lg:w-[30%] bg-white dark:bg-[#1F2937] p-8 rounded-2xl shadow-sm border border-slate-50 dark:border-slate-700 flex flex-col">
        <h4 className="text-lg font-bold text-slate-900 mb-1">
          Category Split
        </h4>
        <p className="text-sm text-slate-500 font-medium mb-8">
          Where your money goes
        </p>

        <div className="relative h-[200px] w-full flex items-center justify-center mb-8">
          {categoryData.length ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={85}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p>No Data Found</p>
            </div>
          )}
          {categoryData.length && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-slate-900">
                ₹{getTotalAmount()}
              </span>
              <span className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest">
                Total
              </span>
            </div>
          )}
        </div>

        {categoryData.length && (
          <div className="space-y-4">
            {categoryData.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  <span className="text-sm font-semibold text-slate-700">
                    {cat.name}
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-900">
                  {cat.value}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ChartsSection;
