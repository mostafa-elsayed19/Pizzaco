import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(
      "ThemeColorContext was used outside of Theme Color Provider",
    );

  return context;
}
