import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme, customTheme1 } from "./theme";

const CustomTheme = ({ children }) => {
  // const themeMode = useSelector((state) => state.theme.themeMode);
  const themeMode = useSelector((state) => state.theme.mode);

  const selectTheme = () => {
    switch (themeMode) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      case "custom1":
        return customTheme1;
      // Add cases for more custom themes if needed
      // Example:
      case "custom2":
        return customTheme2;
      default:
        return lightTheme; // Default to light theme
    }
  };

  return (
    <ThemeProvider theme={selectTheme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomTheme;
