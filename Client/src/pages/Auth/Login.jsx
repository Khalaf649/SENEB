import React, { useState } from 'react';
import '../../styles/all.min.css';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css';
import donateBag from '../../assets/images/donate.png';
import Navbar from '../../Components/NavigationBar';
import TextInput from '../../components/Auth/TextInput';
import PasswordInput from '../../components/Auth/PasswordInput';
import RoleSelector from '../../components/Auth/RoleSelector';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../api/auth/authService';

export default function Login() {
  const [loginRole, setLoginRole] = useState("donor");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setLoginRole(role);
  };

  const roleMap = {
    donor: 'Login as Donor',
    admin: 'Login as Staff',
    sub_admin: 'Login as Staff',
    hospital_staff: 'Login as Health Facility',
  };

  const handleLoginRole = () => roleMap[loginRole] || 'Login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Client-side validation
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const credentials = {
        email,
        password,
        role: loginRole,
      };

      const result = await login(credentials);

      if (result?.token) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('loginRole', result.role);
        setSuccessMessage('Login successful! Redirecting...');

        const role = result.role;
        setTimeout(() => {
          if (role === 'donor') {
            navigate('/donorProfile');
          } else if (role === 'admin') {
            navigate('/adminDashboard');
          } else if (role === 'sub_admin') {
            navigate('/subAdminDashboard');
          } else if (role === 'hospital_staff') {
            navigate('/healthFacilityDashboard');
          }
        }, 1000);
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

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
              <form className='login-form' onSubmit={handleSubmit}>
                <p className='welcome-text'>Welcome to SENEB</p>
                <h2 id='login-title'>{handleLoginRole()}</h2>

                {/* Display error message */}
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}

                {/* Display success message */}
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}

                {/* Email Input */}
                <TextInput
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />

                {/* Password Input */}
                <PasswordInput
                  label="Password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required={true}
                />

                {/* Submit Button */}
                <button
                  type='submit'
                  className='btn btn-login btn-primary w-100 mt-3'
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>

                {/* Role Selector */}
                <RoleSelector onSelect={handleRoleSelect} disabled={loading} />

                {/* Sign up Link */}
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
}
