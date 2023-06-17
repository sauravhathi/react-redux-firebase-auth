import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./components/Auth/LoginForm";
import SignupForm from "./components/Auth/SignupForm";
import WelcomePage from "./components/Auth/WelcomePage";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  console.log(user?.email);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/welcome" element={user ? <WelcomePage /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;