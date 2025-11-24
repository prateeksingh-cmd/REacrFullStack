import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("Please fill all the details.");
      return;
    }

    try {
      await axios.post("http://localhost:5009/signup", {
        name,
        email,
        password,
      });

      alert("Signup Successful! Please SignIn now.");
      navigate("/signin");
    } catch (error) {
      alert("Signup failed. Try again!");
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
          Sign Up
        </Typography>

        <TextField
          fullWidth
          label="Name"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleSignup}
        >
          Sign Up
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </Typography>
      </Paper>
    </Box>
  );
}
