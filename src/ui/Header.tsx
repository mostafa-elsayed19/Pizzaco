import { useTheme } from "../hooks/useTheme";
import Logo from "./Logo";

function Header() {
  const { toggleThemeColor } = useTheme();
  return (
    <header className="bg-color-yellow">
      <div className="flex items-center justify-between px-10 py-5 md:px-20 lg:px-40">
        <Logo />
        <button
          className="rounded-md bg-slate-800 px-4 py-2 text-white"
          onClick={toggleThemeColor}
        >
          Change Theme
        </button>
      </div>
    </header>
  );
}

export default Header;
