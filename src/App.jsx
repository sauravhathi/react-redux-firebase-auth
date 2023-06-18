import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import AuthForm from "./components/Form/authForm";
import Dashboard from "./components/Page/dashboard";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Container maxWidth="sm" component="main" sx={{ mt: 30 }}>
      <Router>
        <Routes>
            <Route path="/auth" element={<AuthForm />} />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/auth" />}
            />
            <Route path="/" element={<Navigate to="/auth" />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
