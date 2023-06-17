import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import BottomNavigation from '../Button/BottomNavigation';
import Button from '../Button/Button';

const SignupForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!email || !password) {
      return;
    }

    if (!email.includes('@')) {
      setError('Invalid email');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      dispatch(signup(email, password) as any);
      alert('Signup successful!');
      navigate('/welcome');
    } catch (err: any) {
      setError(err.message);
    }
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