import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/all.min.css";
import "../styles/style.css";
import { Link, useNavigate } from "react-router-dom";

export default function LoginLogoutButton({ className = "" }) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");  // or navigate("/login") if you prefer
    };

    return (
        <>
            {token ? (
                <button className={`btn login-logout btn-primary ${className}`} onClick={handleLogout}>
                Logout
                </button>
            ) : (
                <Link to="/login" className={`btn login-logout btn-primary ${className}`}>
                Login
                </Link>
            )}
        </>
    );
}