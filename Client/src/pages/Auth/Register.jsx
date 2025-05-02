import React, { useState } from 'react';
import '../../styles/all.min.css';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css';
import Navbar from '../../Components/NavigationBar';
import TextInput from '../../components/Auth/TextInput';
import PasswordInput from '../../components/Auth/PasswordInput';
import SelectInput from '../../components/Auth/SelectInput';
import DateInput from '../../components/Auth/DateInput';
import FileInput from '../../components/Auth/FileInput';
import { registerDonor } from '../../api/auth/authService'; // Import the function to call the API

export default function Register() {
  const [formData, setFormData] = useState({
    full_name: '',
    national_id: '',
    phone_number: '',
    email: '',
    password: '',
    confirm_password: '',
    birth_date: '',
    gender: '',
    address: '',
    blood_type: '',
    last_donation_date: null,
    medical_conditions: '',
    medications: '',
    weight: '',
    donor_image: null,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field) => (event) => {
    setFormData((data) => ({ ...data, [field]: event.target.value }));
  };

  const handlePhotoChange = (file) => {
    setFormData((data) => ({ ...data, donor_image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage('');
      const response = await registerDonor(formData);  // Call API function to register donor
      console.log('Response:', response);

      // Handle success
      if(response){
        alert('Donor registered successfully');
      }
      
      // Optionally, reset the form or redirect to a different page
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to register donor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  const bloodOptions = [
    { value: 'A+', label: 'A+' }, { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' }, { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' }, { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' }, { value: 'O-', label: 'O-' }
  ];

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className='container registration-form'>
          <h2>Registration</h2>
          <p>All fields (*) are mandatory</p>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <hr />
          <div id='donorFields'>
            <span className='title mb-3'>Personal Details:</span>
            <div className='personal-fields mb-3'>
              <TextInput label="Full Name" required placeholder="Enter your name" value={formData.full_name} onChange={handleChange('full_name')} />
              <TextInput label="National ID" required placeholder="Enter your ID" value={formData.national_id} onChange={handleChange('national_id')} />
              <TextInput label="Phone Number" required type="tel" placeholder="Enter your phone number" value={formData.phone_number} onChange={handleChange('phone_number')} />
              <TextInput label="Email" required type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange('email')} />
              <PasswordInput label="Password" required placeholder="Enter your password" value={formData.password} onChange={handleChange('password')} />
              <PasswordInput label="Confirm Password" required placeholder="Enter your password again" value={formData.confirm_password} onChange={handleChange('confirm_password')} />
              <DateInput label="Date of Birth" required value={formData.birth_date} onChange={handleChange('birth_date')} />
              <SelectInput label="Gender" required options={genderOptions} value={formData.gender} onChange={handleChange('gender')} placeholder="Select your gender" />
              <TextInput label="Address" required placeholder="Enter your address" value={formData.address} onChange={handleChange('address')} />
              <FileInput label="Upload Your Photo" onChange={handlePhotoChange} />
            </div>

            <span className="title mb-3">Donation Details:</span>
            <div className="donation-fields mb-3">
              <SelectInput label="Blood Type" required options={bloodOptions} value={formData.blood_type} onChange={handleChange('blood_type')} placeholder="Select your blood type" />
              <DateInput label="Last Donation Date" value={formData.last_donation_date} onChange={handleChange('last_donation_date')} />
              <TextInput label="Medical Conditions" placeholder="e.g., None, Diabetes" value={formData.medical_conditions} onChange={handleChange('medical_conditions')} />
              <TextInput label="Medications Taken" placeholder="e.g., None, Aspirin" value={formData.medications} onChange={handleChange('medications')} />
              <TextInput label="Weight (kg)" required type="number" placeholder="Enter your weight" value={formData.weight} onChange={handleChange('weight')} />
            </div>
          </div>
          <div className="btn-container">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
