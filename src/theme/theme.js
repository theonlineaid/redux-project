// theme.js

import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fffbeb",
    },
    divider: "#fde68a",
    background: {
      default: "#fbbf24",
      paper: "#fbbf24",
    },
    text: {
      primary: "#000",
      secondary: "#27272a",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#dbf4ff",
    },
    divider: "#004282",
    background: {
      default: "#000e21",
      paper: "#000e21",
    },
    text: {
      primary: "#fff",
      secondary: "#71717a",
    },
  },
});

export const customTheme1 = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#30D0F4", // Change to your desired primary color
    },
    secondary: {
      main: "#B7161A", // Change to your desired secondary color
    },
    background: {
      default: "#D5FEF9", // Change to your desired background color
      paper: "#82F7FB", // Change to your desired paper color
    },
    text: {
      primary: "#8F8B89", // Change to your desired text color
      secondary: "#210C0D", // Change to your desired secondary text color
    },
  },
});

// Add more custom themes as needed
// Example:
// export const customTheme2 = createTheme({ /* Theme object */ });
