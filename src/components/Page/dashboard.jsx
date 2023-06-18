import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import { logoutUser } from "../Redux/authThunk";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.auth);

  if (!user) {
    navigate("/auth");
  }

  return (
    <Stack
      sx={{ bgcolor: "#263238", p: 4, mt: 4, borderRadius: 2 }}
      spacing={2}
    >
      <Stack spacing={2}>
        <Typography variant="h4" align="center" color="white">
          Welcome
        </Typography>
        <Typography variant="h6" align="center" color="white">
          {user?.email}
        </Typography>
      </Stack>
      <Button
        onClick={() => dispatch(logoutUser())}
        variant="contained"
        disabled={loading}
      >
        Logout
      </Button>
    </Stack>
  );
};

export default Dashboard;
