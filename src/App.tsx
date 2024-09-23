import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ui/ErrorPage";
import Login from "./features/users/Login";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import AppLayout from "./ui/AppLayout";
import { ThemeColorProvider } from "./contexts/ThemeContext";

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
