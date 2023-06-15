import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../store/auth';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    if (!user || (user.email !== email && user.password !== password)) {
      setError('Invalid email or password');
      return;
    }

    dispatch(login({ email, password }));
    navigate('/welcome');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-8">Login</h2>
      <div className="bg-white p-8 rounded shadow-md w-80">
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 text-white rounded px-4 py-2 w-full focus:outline-none hover:bg-blue-600"
          >
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <div className="mt-4">
          <Link to="/signup" className="text-blue-500 underline">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;