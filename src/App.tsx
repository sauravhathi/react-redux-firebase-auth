import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/auth';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import WelcomePage from './components/Auth/WelcomePage';


const App: React.FC = () => {

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          {isAuthenticated ?
            <Route path="/welcome" element={<WelcomePage />} /> :
            <Route path="/welcome" element={<Navigate to="/login" />} />
          }
        </Routes>
      </Router>
    </div>
  );
};

export default App;