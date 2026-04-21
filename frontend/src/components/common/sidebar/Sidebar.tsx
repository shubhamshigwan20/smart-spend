import { useState } from "react";
import {
  LayoutDashboard,
  Receipt,
  CreditCard,
  Bell,
  PieChart,
  Settings,
  LogOut,
  Lock,
} from "lucide-react";
import { cn } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    route: "/dashboard",
    active: true,
  },
  { icon: Receipt, label: "Expenses", route: "/expenses" },
  { icon: CreditCard, label: "Subscriptions", route: "/subscriptions" },
  { icon: Bell, label: "Alerts", route: "/alerts" },
  { icon: PieChart, label: "Categories", route: "/categories" },
  { icon: Settings, label: "Settings", route: "/settings" },
];

const Sidebar = () => {
  const [activeIdx, setActiveIdx] = useState("Dashboard");
  const navigate = useNavigate();
  return (
    <aside className=" left-0 top-0 h-full flex flex-col w-[18.75%] bg-white border-r border-slate-100 z-50">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3525cd] to-[#4f46e5] flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Lock size={16} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter text-indigo-600">
              SmartSpend
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Private Digital Vault
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 mt-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={() => {
                navigate(item.route);
                setActiveIdx(item.label);
              }}
              className={cn(
                "flex items-center gap-3 px-6 py-3 transition-all group",
                item.label === activeIdx
                  ? "bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600 font-semibold"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50",
              )}
            >
              <item.icon
                size={20}
                className={cn(
                  item.active
                    ? "text-indigo-600"
                    : "text-slate-400 group-hover:text-slate-600",
                )}
              />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-100">
        <a
          href="#"
          className="flex items-center gap-3 text-slate-500 hover:text-slate-900 px-6 py-3 transition-colors group"
        >
          <LogOut
            size={20}
            className="text-slate-400 group-hover:text-slate-600"
          />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
