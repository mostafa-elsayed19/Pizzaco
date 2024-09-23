import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <div className="bg-black">Hello</div>
    </div>
  );
}

export default AppLayout;
