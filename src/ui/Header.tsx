import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";
import Container from "./Container";
import SearchOrder from "../features/order/SearchOrder";
import CartOverview from "../features/cart/CartOverview";
import User from "../features/users/User";

function Header() {
  return (
    <header className="bg-main-color">
      <Container display="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <SearchOrder />
          <CartOverview />
          <ThemeToggleButton />
          <User />
        </div>
      </Container>
    </header>
  );
}

export default Header;
