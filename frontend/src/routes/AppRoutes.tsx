import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../views/login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../views/dashboard/Dashboard";
import Expenses from "../views/expenses/Expenses";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login flow="login" />} />
        <Route path="/signup" element={<Login flow="signup" />} />
        <Route
          path="/forgot-password"
          element={<Login flow="forgot-password" />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
