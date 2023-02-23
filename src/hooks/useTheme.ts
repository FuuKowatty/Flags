import { useContext } from "react";

//context
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    return "Context is outer scope";
  }
  return context;
};
