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
import { loginDonor } from '../../api/auth/authService';

export default function Login() {
  const [loginRole, setLoginRole] = useState("Login as Donor");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setLoginRole(role === 'donor' ? 'Login as Donor' : 'Login as Staff');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Prepare the credentials object
      const credentials = {
        email,
        password,
      };



      // Pass the credentials to the login function
      const result = await loginDonor(credentials);

      if (result?.token) {
        // Store the JWT token in localStorage
        localStorage.setItem('token', result.token);
        setSuccessMessage('Login successful!');


        // Redirect based on role
        setTimeout(() => {
          if (loginRole === 'Login as Donor') {
            navigate('/donorProfile');
          } else {
            navigate('/staff/dashboard');
          }
        }, 1000); // Give time to show the message before navigating
      } 
      else {
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred during login. Please try again.');
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
                <h2 id='login-title'>{loginRole}</h2>

                {/* Display error message if any */}
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
                {/* Display success message if any */}
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
                <RoleSelector onSelect={handleRoleSelect} />

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
