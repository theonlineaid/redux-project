
import { useSelector, useDispatch } from "react-redux";

import { Typography, Box, IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { asyncToggleTheme, setCustomTheme, toggleDarkMode, toggleLightMode, } from "../redux/features/theme/themeSlice";


export default function ThemeSwitchWithIcon() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.mode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleToggleLightMode = () => {
    dispatch(toggleLightMode());
  };

  const handleCustomThemeMode = () => {
    dispatch(setCustomTheme("custom1"));
  };


  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
        }}
      >
        <button onClick={handleToggleDarkMode}>Dark Mode</button>
        <button onClick={handleToggleLightMode}>Light Mode</button>
        <button onClick={handleCustomThemeMode}>Custome</button>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(asyncToggleTheme())}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </>
  );
}
