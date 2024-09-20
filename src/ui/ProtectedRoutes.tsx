import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const user = false;
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
