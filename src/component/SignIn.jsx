import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToHome = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5009/signin", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      if (res.data.token) {
        alert("Login Successful");
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("Login failed! Check credentials or server.");
      console.log(error);
    }
  };

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
        elevation={5}
        sx={{
          width: 350,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Sign In
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, p: 1 }}
          onClick={goToHome}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </Typography>
      </Paper>
    </Box>
  );
}
