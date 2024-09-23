import { createContext, ReactNode, useEffect } from "react";
import { useLocalStateStorage } from "../hooks/useLocalStateStorage";

export const ThemeContext = createContext<{
  theme: string;
  toggleThemeColor: () => void;
} | null>(null);

export function ThemeColorProvider({ children }: { children: ReactNode }) {
  const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  console.log(preferedTheme);
  const [theme, setTheme] = useLocalStateStorage(preferedTheme, "theme");

  function toggleThemeColor() {
    setTheme((currentTheme: string) => {
      return currentTheme === "light" ? "dark" : "light";
      // switch (currentTheme) {
      //   case "light":
      //     return "dark";
      //   case "dark":
      //     return "light";
      //   default:
      //     return "light";
      // }
    });
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
