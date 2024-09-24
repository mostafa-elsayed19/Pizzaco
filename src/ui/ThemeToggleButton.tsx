import { useTheme } from "../hooks/useTheme";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function ThemeToggleButton() {
  const { theme, toggleThemeColor } = useTheme();
  return (
    <button className="text-text-color text-2xl" onClick={toggleThemeColor}>
      {theme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
    </button>
  );
}

export default ThemeToggleButton;
