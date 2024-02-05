import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: !!JSON.parse(localStorage.getItem("darkMode")),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.darkMode = !state.darkMode;
    },
  },
});

// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(toggleTheme())`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const asyncToggleTheme = () => (dispatch) => {
  const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
  localStorage.setItem("darkMode", !isDarkMode);
  dispatch(toggleTheme());
};

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// // Define the color variants
// const PRIMARY = {
//   lighter: '#C8FACD',
//   light: '#5BE584',
//   main: '#0162C4',
//   dark: '#007B55',
//   darker: '#005249',
// };
// const SECONDARY = {
//   lighter: '#D6E4FF',
//   light: '#84A9FF',
//   main: '#3366FF',
//   dark: '#1939B7',
//   darker: '#091A7A',
// };
// const INFO = {
//   lighter: '#D0F2FF',
//   light: '#74CAFF',
//   main: '#1890FF',
//   dark: '#0C53B7',
//   darker: '#04297A',
// };
// const SUCCESS = {
//   lighter: '#E9FCD4',
//   light: '#AAF27F',
//   main: '#54D62C',
//   dark: '#229A16',
//   darker: '#08660D',
// };
// const WARNING = {
//   lighter: '#FFF7CD',
//   light: '#FFE16A',
//   main: '#FFC107',
//   dark: '#B78103',
//   darker: '#7A4F01',
// };
// const ERROR = {
//   lighter: '#FFE7D9',
//   light: '#FFA48D',
//   main: '#FF4842',
//   dark: '#B72136',
//   darker: '#7A0C2E',
// };

// // Function to load the theme from local storage
// const loadThemeFromLocalStorage = () => {
//   const storedTheme = localStorage.getItem('theme');
//   return storedTheme ? JSON.parse(storedTheme) : PRIMARY;
// };

// // Initial state with the default theme loaded from local storage
// const initialState = {
//   currentTheme: loadThemeFromLocalStorage(),
// };

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     changeTheme: (state, action) => {
//       const selectedTheme = action.payload.toLowerCase();
//       // Set the selected theme based on the action payload
//       switch (selectedTheme) {
//         case 'success':
//           state.currentTheme = SUCCESS;
//           break;
//         case 'warning':
//           state.currentTheme = WARNING;
//           break;
//         case 'info':
//           state.currentTheme = INFO;
//           break;
//         case 'error':
//           state.currentTheme = ERROR;
//           break;
//         case 'primary':
//           state.currentTheme = PRIMARY;
//           break;
//         default:
//           state.currentTheme = PRIMARY; // Default to primary theme
//       }

//       // Save the selected theme to local storage
//       localStorage.setItem('theme', JSON.stringify(state.currentTheme));
//     },
//   },
// });

// export const { changeTheme } = themeSlice.actions;
// export default themeSlice.reducer;
