import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { getColorPalette } from "./theme";
import { createContext, useState } from "react";

export const ToggleThemeContext = createContext(() => {});

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light");

  const theme = createTheme({
    ...getColorPalette(activeTheme),
  });

  const toggleTheme = () => {
    if (activeTheme === "dark") {
      setActiveTheme("light");
    } else {
      setActiveTheme("dark");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <CssBaseline>{children}</CssBaseline>
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
