import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default AppLayout;
