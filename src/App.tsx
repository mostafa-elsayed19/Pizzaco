import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeColorProvider } from "./contexts/ThemeContext";

import Login from "./features/users/Login";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import ErrorPage from "./ui/ErrorPage";
import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/Menu";
import Home from "./ui/Home";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import { MenuLoader } from "./utils/loaders";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      element: <ProtectedRoutes />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <AppLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "/menu", element: <Menu />, loader: MenuLoader },
            {
              path: "/order",
              children: [
                {
                  path: "newOrder",
                  element: <CreateOrder />,
                },
                {
                  path: ":orderId",
                  element: <Order />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return (
    <ThemeColorProvider>
      <RouterProvider router={routers} />
    </ThemeColorProvider>
  );
}

export default App;
