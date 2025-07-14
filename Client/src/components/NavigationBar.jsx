import React, { useEffect, useState } from "react";
import logo from "../../src/assets/images/seneb.png";
import greyLogo from "../assets/images/sidebar-logo.png";
import LoginLogoutButton from "../components/LoginLogoutButton";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [loginRole, setLoginRole] = useState(localStorage.getItem("loginRole"));

    useEffect(() => {
        const updateAuth = () => {
            setToken(localStorage.getItem("token"));
            setLoginRole(localStorage.getItem("loginRole"));
        };

        // listen to custom changes via storage
        window.addEventListener("storage", updateAuth);
        updateAuth(); // Run on mount

        return () => window.removeEventListener("storage", updateAuth);
    }, [location]);

    return (
        <nav className={`navbar navbar-expand-lg sticky-top ${token && loginRole === "sub_admin" ? "subadmin-navbar" : ""}`}>
            <Link to={loginRole === "sub_admin" ? "/subAdminDashboard" : "/"} className="navbar-brand d-flex align-items-center">
                <img className="logo" src={loginRole === "sub_admin" ? greyLogo : logo} alt="Logo" width="60" />
                <h2 className="fx-semibold mx-1 mb-0">SENEB</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {token && loginRole === "sub_admin" ? (
                        <>
                            <li className="nav-item mx-2"><Link to="/subAdminDashboard" className="nav-link">Dashboard</Link></li>
                            <li className="nav-item mx-2"><Link to="/subAdminDashboard/appointments" className="nav-link">Appointments</Link></li>
                            <li className="nav-item mx-2"><Link to="/subAdminDashboard/profile" className="nav-link">Profile</Link></li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item mx-2"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item mx-2"><Link to={{ pathname: "/", hash: "#why-donate" }} className="nav-link">Why Donate Blood</Link></li>
                            <li className="nav-item mx-2"><Link to={{ pathname: "/", hash: "#donate-process" }} className="nav-link">Donate Process</Link></li>
                            <li className="nav-item mx-2"><Link to={{ pathname: "/", hash: "#contact-us" }} className="nav-link">Contact Us</Link></li>
                        </>
                    )}
                </ul>
                <LoginLogoutButton className="ms-3" />
            </div>
        </nav>
    );
}
