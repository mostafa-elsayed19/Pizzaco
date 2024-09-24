import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-color-yellow">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <ThemeToggleButton />
      </div>
    </header>
  );
}

export default Header;
