import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import BottomNavigation from '../Button/BottomNavigation';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    dispatch(login(email, password) as any)
      .then(() => {
        alert('Login successful!');
        navigate('/welcome');
      })
      .catch((error: any) => {
        setError('Invalid email or password');
      });
  };

  return (
    <>
      <h2 className="title">Login</h2>
      <div className="box">
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <BottomNavigation path="/signup">Signup</BottomNavigation>
      </div>
    </>
  );
};

export default LoginForm;