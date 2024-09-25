import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <main className="flex h-screen flex-col">
      {isLoading && <Loader />}
      <Header />
      <section className="grow bg-background-color">
        <main className="mx-auto max-w-5xl">
          <Outlet />
        </main>
      </section>
      <Footer />
    </main>
  );
}

export default AppLayout;
