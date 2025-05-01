import React from "react";
import logo from "../../src/assets/images/seneb.png"; 
import "../styles/bootstrap.min.css";
import "../styles/all.min.css";
import Login from "../pages/Auth/Login";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <a href="#!" className="navbar-brand d-flex align-items-center">
                <img className="logo" src={logo} alt="Logo" width="60" />
                <h2 className="fx-semibold mx-1 mb-0">SENEB</h2>
            </a>
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
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#why-donate">Why Donate Blood</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#donate-process">Donate Process</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#contact-us">Contact Us</a>
                    </li>
                </ul>
                <a href= {Login} className="btn btn-primary ms-3">Login</a>
            </div>
        </nav>
    );
};