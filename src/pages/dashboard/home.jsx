import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <Stack
      spacing={2}
      sx={{ margin: "20px auto", width: "400px", alignItems: "center" }}
    >
      <Typography variant="h4">Welcome Guest.</Typography>
      <Button variant="outlined" onClick={() => navigate("/auth/login")}>
        Login
      </Button>
    </Stack>
  );
}
