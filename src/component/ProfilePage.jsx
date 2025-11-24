import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Paper, CircularProgress } from "@mui/material";

export default function HomePage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
      return;
    }

    axios
      .get("http://localhost:5009/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        // If token expires or fails
        localStorage.removeItem("token");
        navigate("/signin");
      });
  }, [navigate]);

  const goToUsers = () => {
    navigate("/userslist");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  if (!data) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f3f3",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: 400,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Welcome, {data.name}! 👋
        </Typography>

        <Typography sx={{ mt: 1, mb: 3 }} variant="body1">
          This is your personalized dashboard.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mb: 2 }}
          onClick={goToUsers}
        >
          View All Users
        </Button>

        <Button
          variant="outlined"
          fullWidth
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
}
