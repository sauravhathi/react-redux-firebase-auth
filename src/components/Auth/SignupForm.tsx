import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../store/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../store/auth';
import Button from '../Button/Button';
import Input from '../Input/Input';
import BottomNavigation from '../Button/BottomNavigation';

const SignupForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const users = useSelector((state: RootState) => state.auth.users);

  const handleSignup = () => {
    if (!email || !password) {
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setError('Email already exists');
      return;
    }

    dispatch(signup({ email, password }));
    alert('Signup successful');
    navigate('/login');
  };

  return (
    <>
      <h2 className="title">Signup</h2>
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
          <Button onClick={handleSignup}>Signup</Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <BottomNavigation path="/login">Log In</BottomNavigation>
      </div>
    </>
  );
};

export default SignupForm;