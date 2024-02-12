import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("themeMode") || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", state.mode);
    },

    toggleDarkMode: (state) => {
      state.mode = "dark";
      localStorage.setItem("themeMode", "dark");
    },

    toggleLightMode: (state) => {
      state.mode = "light";
      localStorage.setItem("themeMode", "light");
    },

    setCustomTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("themeMode", action.payload);
    },
  },
});

export const asyncToggleTheme = () => (dispatch) => {
  const currentMode = localStorage.getItem("themeMode") || "light";
  const newMode = currentMode === "light" ? "dark" : "light";
  localStorage.setItem("themeMode", newMode);
  dispatch(toggleTheme());
};

export const { toggleTheme, toggleDarkMode, toggleLightMode, setCustomTheme } = themeSlice.actions;

export default themeSlice.reducer;
