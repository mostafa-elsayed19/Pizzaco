import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";
import Container from "./Container";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-main-color">
      <Container display="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <SearchOrder />
          <ThemeToggleButton />
        </div>
      </Container>
    </header>
  );
}

export default Header;
