import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/auth';
import { Navigate } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';
import Button from '../Button/Button';

const WelcomePage: React.FC = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const currentUser = useSelector((state: RootState) => state.auth.currentUser);

    if (!isAuthenticated || !currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <h2 className="title">Welcome, {currentUser.email}!</h2>
            <div className="box">
                <p className="text-gray-700">You have successfully logged in.</p>
                <Button onClick={() => dispatch(logout())}>Logout</Button>
            </div>
        </>
    );
};

export default WelcomePage;
