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

export default function Register() {

    const [formData, setFormData] = useState({
        name: '',
        id: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: '',
        gender: '',
        address: '',
        bloodType: '',
        lastDonation: '',
        medicalCondition: '',
        medications: '',
        weight: '',
        photo: null,
    });

    const handleChange = (field) => (event) => {
        setFormData(data => ({ ...data, [field]: event.target.value }));
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

    const handlePhotoChange = (file) => {
        setFormData(data => ({ ...data, photo: file }));
    };

    return (
        <>
            <Navbar />
            <div className='container registration-form'>
                <h2>Registration</h2>
                <p>All fields (*) are mandatory</p>
                <hr />
                <div id='donorFields'>
                    <span className='title mb-3'>Personal Details:</span>
                    <div className='personal-fields mb-3'>
                        <TextInput label="Full Name" required={true} placeholder="Enter your name" value={formData.name} onChange={handleChange('name')} />
                        <TextInput label="National ID" required={true} placeholder="Enter your ID" value={formData.id} onChange={handleChange('id')} />
                        <TextInput label="Phone Number" required={true} type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange('phone')} />
                        <TextInput label="Email" required={true} type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange('email')} />
                        <PasswordInput label="Password" required={true} placeholder="Enter your password" value={formData.password} onChange={handleChange('password')} />
                        <PasswordInput label="Confirm Password" required={true} placeholder="Enter your password again" value={formData.confirmPassword} onChange={handleChange('confirmPassword')} />
                        <DateInput label="Date of Birth" required={true} value={formData.dob} onChange={handleChange('dob')} />
                        <SelectInput label="Gender" required={true} options={genderOptions} value={formData.gender} onChange={handleChange('gender')} placeholder="Select your gender" />
                        <TextInput label="Address" required={true} placeholder="Enter your address" value={formData.address} onChange={handleChange('address')} />
                        <FileInput label="Upload Your Photo" onChange={handlePhotoChange} />
                    </div>
                    <span className="title mb-3">Donation Details:</span>
                    <div className="donation-fields mb-3">
                        <SelectInput label="Blood Type" required={true} options={bloodOptions} value={formData.bloodType} onChange={handleChange('bloodType')} placeholder="Select your blood type" />
                        <DateInput label="Last Donation Date" required={false} value={formData.lastDonation} onChange={handleChange('lastDonation')} />
                        <TextInput label="Medical Conditions" placeholder="e.g., None, Diabetes" value={formData.medicalCondition} onChange={(e) =>
                            setFormData({ ...formData, medicalCondition: e.target.value })} />
                        <TextInput
                            label="Medications Taken *"
                            placeholder="e.g., None, Aspirin"
                            value={formData.medications}
                            onChange={(e) =>
                                setFormData({ ...formData, medications: e.target.value })
                            }
                        />
                        <TextInput label="Weight (kg)" required={true} type="number" placeholder="Enter your weight" value={formData.weight} onChange={handleChange('weight')} />
                    </div>
                </div>
                <div class="btn-container">
                    <button type='submit' className="submit-btn">Register</button>
                </div>
            </div>
        </>
    )
};

