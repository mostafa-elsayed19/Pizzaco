import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useReduxMethods";

function ProtectedRoutes() {
  const { name } = useAppSelector((state) => state.user);
  return name ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
