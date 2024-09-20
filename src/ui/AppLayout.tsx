import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <div className="bg-black">
        <p>Hello</p>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <div className="bg-black">Hello</div>
    </div>
  );
}

export default AppLayout;
