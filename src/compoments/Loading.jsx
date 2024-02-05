import React from "react";
import { Paper, Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 5,
      }}
    >
      <Paper sx={{ borderRadius: "50%" }}>
        <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
          <CircularProgress size={28} />
        </Box>
      </Paper>
    </Box>
  ); // You can use a more sophisticated loading UI here
};

export default Loading;