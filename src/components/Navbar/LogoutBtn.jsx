import React from 'react'
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Update the authentication status
        navigate('/login'); // Redirect to the login page
    };
    return (
        <button
            type="button"
            className="nav-btn"
            onClick={handleLogout}
        >
            Logout
        </button>
    )
}

export default LogoutBtn