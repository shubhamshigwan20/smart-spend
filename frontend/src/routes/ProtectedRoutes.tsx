import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { token } = useAuth();
  return token ? <Layout /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
