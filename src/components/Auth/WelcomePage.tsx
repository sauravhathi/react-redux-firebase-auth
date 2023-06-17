import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { checkAuthState, logout } from '../actions/authActions';

const WelcomePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);
  console.log(user?.email);

  useEffect(() => {
    const checkAuthentication = async () => {
      await dispatch(checkAuthState() as any);
    };

    checkAuthentication();
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout() as any);
    alert('You have been logged out.');
    navigate('/login');
  };

  return (
    <>
      <h2 className="title">Welcome,</h2>
      <div className="box">
        <p className="text-gray-700">You have successfully logged in.</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </>
  );
};

export default WelcomePage;