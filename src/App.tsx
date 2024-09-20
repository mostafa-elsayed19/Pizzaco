import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";

function App() {
	const routers = createBrowserRouter([
		{ path: "/", element: <AppLayout />, errorElement: <ErrorPage /> },
	]);
	return <RouterProvider router={routers} />;
}

export default App;
