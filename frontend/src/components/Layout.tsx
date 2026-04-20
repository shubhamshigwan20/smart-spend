import Header from "./common/header/Header";
// import Footer from "./common/footer/Footer";
import Sidebar from "./common/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex justify-between min-h-screen bg-[#f9f9ff] text-slate-900 font-['Inter'] antialiased">
      <Sidebar />
      <div className="flex-col w-[81.25%] right-0">
        <Header />
        <main className="">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
