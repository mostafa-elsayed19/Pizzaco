import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import Login from "./features/users/login";
import ProtectedRoutes from "./ui/ProtectedRoutes";

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
  return <RouterProvider router={routers} />;
}

export default App;
