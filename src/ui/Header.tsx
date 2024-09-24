import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";
import Container from "./Container";

function Header() {
  return (
    <header className="bg-main-color">
      <Container display="flex items-center justify-between">
        <Logo />
        <ThemeToggleButton />
      </Container>
    </header>
  );
}

export default Header;
