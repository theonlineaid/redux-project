// theme.js

import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fffbeb",
    },
    divider: "#fde68a",
    // background: {
    //   default: "#fbbf24",
    //   paper: "#fbbf24",
    // },
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
    mode: "dark",
    common: {
      "black": "#000",
      "white": "#fff"
    },
    primary: {
      lighter: '#D0F2FF',
      light: '#74CAFF',
      main: '#1890FF',
      dark: '#0C53B7',
      darker: '#04297A',
      contrastText: '#fff',
    },
    secondary: {
      lighter: '#E9FCD4',
      light: '#AAF27F',
      main: '#54D62C',
      dark: '#229A16',
      darker: '#08660D',
      contrastText: '#000',
    },
    background: {
      // default: "#D5FEF9", // Change to your desired background color
      paper: "#82F7FB", // Change to your desired paper color
    },
    text: {
      primary: "#8F8B89", // Change to your desired text color
      secondary: "#210C0D", // Change to your desired secondary text color
      disabled: "rgba(0, 0, 0, 0.38)"
    },
  },
});

// Add more custom themes as needed
// Example:
// export const customTheme2 = createTheme({ /* Theme object */ });
