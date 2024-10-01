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
import { MenuLoader, OrderLoader } from "./utils/loaders";
import Cart from "./features/cart/Cart";
import { Provider } from "react-redux";
import { store } from "./store";
import { createNewOrder } from "./utils/actions";

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
            { path: "/cart", element: <Cart /> },
            {
              path: "/order",
              children: [
                {
                  path: "newOrder",
                  element: <CreateOrder />,
                  action: createNewOrder,
                },
                {
                  path: ":orderId",
                  element: <Order />,
                  loader: OrderLoader,
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
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </ThemeColorProvider>
  );
}

export default App;
