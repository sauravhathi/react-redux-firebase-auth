import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signupUser } from "../Redux/authThunk";
import { Button, TextField, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  if (user) {
    navigate("/dashboard");
  }

  return (
    <Stack
      sx={{ bgcolor: "#fafafa", p: 4, mt: 4, borderRadius: 2, boxShadow: 1 }}
      spacing={2}
    >
      <Typography variant="h4" align="center" color="black">
        Login / Signup
      </Typography>
      <Stack spacing={2}>
        <TextField
          value={email}
          onChange={handleInputChange}
          name="email"
          label="Email"
          variant="outlined"
          autoFocus
        />
        <TextField
          value={password}
          onChange={handleInputChange}
          name="password"
          label="Password"
          variant="outlined"
          helperText={error}
        />

        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => dispatch(loginUser({ email, password }))}
            variant="contained"
          >
            Login
          </Button>
          <Button
            onClick={() => dispatch(signupUser({ email, password }))}
            variant="contained"
          >
            Signup
          </Button>
        </Stack>
        <Typography variant="body1" align="center" color="black">
          {loading && "Loading..."}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AuthForm;
