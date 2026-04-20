import { cn } from "../../../utils/helper";

type Transaction = {
  recipient: string;
  sub: string;
  category: string;
  date: string;
  amount: string;
  icon: string;
  color: string;
  bg: string;
};

type Alerts = {
  title: string;
  sub: string;
  icon: string;
  color: string;
};

type BottomSectionProps = {
  transactions: Transaction[];
  alerts: Alerts[];
};

const BottomSection = (props: BottomSectionProps) => {
  const { transactions, alerts } = props;
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Recent Transactions */}
      <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-50">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-lg font-bold text-slate-900">Recent Expenses</h4>
          <button className="text-indigo-600 text-sm font-bold hover:underline transition-all">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-slate-400">
                <th className="pb-4 font-bold">Recipient</th>
                <th className="pb-4 font-bold">Category</th>
                <th className="pb-4 font-bold">Date</th>
                <th className="pb-4 font-bold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((tx: Transaction, i: number) => (
                <tr
                  key={i}
                  className="group hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center",
                          tx.bg,
                        )}
                      >
                        <tx.icon className={tx.color} size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">
                          {tx.recipient}
                        </p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">
                          {tx.sub}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                        tx.bg,
                        tx.color,
                      )}
                    >
                      {tx.category}
                    </span>
                  </td>
                  <td className="py-4 text-xs font-semibold text-slate-500 uppercase">
                    {tx.date}
                  </td>
                  <td className="py-4 text-right font-bold text-slate-900">
                    {tx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Required */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50 flex flex-col">
        <h4 className="text-lg font-bold text-slate-900 mb-6">
          Action Required
        </h4>
        <div className="space-y-4">
          {alerts.map((alert: Alerts, i: number) => (
            <div
              key={i}
              className={cn(
                "p-4 rounded-xl border-l-4 transition-all",
                alert.color,
              )}
            >
              <div className="flex items-start gap-3">
                <alert.icon size={18} className="mt-0.5" />
                <div>
                  <p className="text-sm font-bold leading-tight">
                    {alert.title}
                  </p>
                  <p className="text-xs opacity-80 mt-1 font-medium">
                    {alert.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 w-full py-4 border-2 border-dashed border-slate-100 rounded-xl text-slate-400 text-sm font-bold hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-2">
          <span className="text-lg">+</span> Add New Alert
        </button>
      </div>
    </section>
  );
};

export default BottomSection;
