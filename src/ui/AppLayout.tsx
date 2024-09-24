import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <main className="flex h-screen flex-col">
      <Header />
      <section className="flex-grow bg-background-color">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default AppLayout;
