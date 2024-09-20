import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl">Something went wrong</p>
        <Link to="/" className="w-fit rounded-md bg-slate-200 px-4 py-2">
          <span className="text-red-500">&larr;</span> take me home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
