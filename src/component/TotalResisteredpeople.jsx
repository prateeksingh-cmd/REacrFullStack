import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider, CircularProgress } from "@mui/material";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5009/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  if (!users.length) {
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
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f3f3",
        p: 2,
      }}
    >
      <Paper sx={{ width: 400, p: 3, borderRadius: 3 }} elevation={4}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
          Users List 👥
        </Typography>

        <List>
          {users.map((user, index) => (
            <>
              <ListItem key={index}>
                <ListItemText
                  primary={user.name}
                  secondary={user.email}
                />
              </ListItem>
              {index !== users.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
