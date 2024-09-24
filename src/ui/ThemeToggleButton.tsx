import { useTheme } from "../hooks/useTheme";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function ThemeToggleButton() {
  const { theme, toggleThemeColor } = useTheme();
  return (
    <button className="text-2xl text-amber-950" onClick={toggleThemeColor}>
      {theme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
    </button>
  );
}

export default ThemeToggleButton;
