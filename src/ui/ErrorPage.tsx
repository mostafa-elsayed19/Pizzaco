import { Link, useRouteError } from "react-router-dom";
import Container from "./Container";

function ErrorPage() {
  const error = useRouteError();

  return (
    <main className="bg-background-color text-text-color">
      <Container display="flex flex-col items-center justify-center gap-4 h-screen">
        <p className="text-2xl">
          {error instanceof Error
            ? `${error?.message}`
            : "Something went wrong"}
        </p>
        <Link to="/" className="w-fit rounded-md bg-main-color px-4 py-2">
          &larr; take me home
        </Link>
      </Container>
    </main>
  );
}

export default ErrorPage;
