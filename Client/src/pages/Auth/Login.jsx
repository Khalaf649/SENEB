import React, { useState } from 'react';
import '../../styles/all.min.css';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css';
import donateBag from '../../assets/images/donate.png';
import Navbar from '../../Components/NavigationBar';
import TextInput from '../../components/Auth/TextInput';
import PasswordInput from '../../components/Auth/PasswordInput';
import RoleSelector from '../../components/Auth/RoleSelector';
import { Link } from "react-router-dom";

export default function Login() {

    const [loginRole, setLoginRole] = useState("Login as Donor");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRoleSelect = (role) => {
        setLoginRole(role === 'donor' ? 'Login as Donor' : 'Login as Staff');
    }

    return (
        <>
            <Navbar />
            <div className='login-page'>

                <div className="container login-container">
                    <div className='row align-items-center'>
                        {/* Image Column */}
                        <div className='col-md-6 login-image'>
                            <img src={donateBag} alt="Login" className='img-fluid' />
                        </div>
                        {/* Form Column */}
                        <div className='col-md-6 mt-3 mb-3'>
                            <form className='login-form'>
                                <p className='welcome-text'>Welcome to SENEB</p>
                                <h2 id='login-title'>{loginRole}</h2>

                                <TextInput
                                    label="Email Address"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required={true}
                                />
                                <PasswordInput
                                    label="Password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required={true}
                                />

                                <button type='submit' className='btn btn-login btn-primary w-100 mt-3'>Login</button>

                                <RoleSelector onSelect={handleRoleSelect} />

                                <p className='signup-link mt-3'>
                                    Don't have an account? <Link to="/register">Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};