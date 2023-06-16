import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../store/auth';
import Button from '../Button/Button';
import Input from '../Input/Input';
import BottomNavigation from '../Button/BottomNavigation';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.auth.users);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
      setError('Invalid email or password');
      return;
    }

    dispatch(login({ email, password }));
    navigate('/welcome');
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