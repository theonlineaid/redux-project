import { Box, Container, Paper, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Paper sx={{ p: 4, mt: 3 }}>
        <Typography variant="h2">Oops!</Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography variant="subtitle1">
          <i>{error.statusText || error.message}</i>
        </Typography>
      </Paper>
    </Container>
  );
}