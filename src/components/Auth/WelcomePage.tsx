import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/auth';
import { Navigate } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';

const WelcomePage: React.FC = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const user = useSelector((state: RootState) => state.auth.user);

    if (!isAuthenticated || !user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-8">Welcome, {user.email}!</h2>
            <div className="bg-white p-8 rounded shadow-md">
                <p className="text-gray-700">You have successfully logged in.</p>
                <button
                    type="button"
                    className="bg-blue-500 text-white rounded px-4 py-2 w-full focus:outline-none hover:bg-blue-600"
                    onClick={() => dispatch(logout())}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;