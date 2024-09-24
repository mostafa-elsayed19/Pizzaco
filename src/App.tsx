import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeColorProvider } from "./contexts/ThemeContext";

import Login from "./features/users/Login";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import ErrorPage from "./ui/ErrorPage";
import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/Menu";

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
          children: [{ path: "/menu", element: <Menu /> }],
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
