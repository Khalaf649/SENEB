import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginLogoutButton({ className = "" }) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("loginRole");

        // Trigger re-render globally
        window.dispatchEvent(new Event("storage"));  

        navigate("/"); // Go to home or login
    };

    return token ? (
        <button className={`btn login-logout btn-primary ${className}`} onClick={handleLogout}>
            Logout
        </button>
    ) : (
        <Link to="/login" className={`btn login-logout btn-primary ${className}`}>
            Login
        </Link>
    );
}
