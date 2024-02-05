import React, { useMemo, useState } from 'react';
import { createAppTheme } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CustomTheme({ children }) {
  const [mode, setMode] = useState("light");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
