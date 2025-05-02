import React from "react";
import logo from "../../src/assets/images/seneb.png"; 
import "../styles/bootstrap.min.css";
import "../styles/all.min.css";
import "../styles/style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    // Check if there's a token in localStorage
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        // Clear the token from localStorage on logout
        localStorage.removeItem('token');
        window.location.href = "/";  // Redirect to home after logout
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <Link to="/" className="navbar-brand d-flex align-items-center">
                <img className="logo" src={logo} alt="Logo" width="60" />
                <h2 className="fx-semibold mx-1 mb-0">SENEB</h2>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-2">
                        <Link to={{ pathname: "/", hash: "#home" }} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to={{ pathname: "/", hash: "#why-donate" }} className="nav-link">
                            Why Donate Blood
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to={{ pathname: "/", hash: "#donate-process" }} className="nav-link">
                            Donate Process
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to={{ pathname: "/", hash: "#contact-us" }} className="nav-link">
                            Contact Us
                        </Link>
                    </li>
                    {/* Conditionally render Profile link if token exists */}
                    {token && (
                        <li className="nav-item mx-2">
                            <Link to="/donorProfile" className="nav-link">
                                Profile
                            </Link>
                        </li>
                    )}
                </ul>
                {/* Conditionally render Login/Logout button */}
                {token ? (
                    <button className="btn btn-primary ms-3" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className="btn btn-primary ms-3">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}
