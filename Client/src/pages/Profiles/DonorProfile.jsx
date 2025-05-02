import React, { useState, useEffect } from 'react';
import '../../styles/all.min.css';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css';
import userPhoto from '../../assets/images/user-photo.png';
import Navbar from '../../Components/NavigationBar';
import TextInput from '../../components/Auth/TextInput';
import PasswordInput from '../../components/Auth/PasswordInput';
import SelectInput from '../../components/Auth/SelectInput';
import DateInput from '../../components/Auth/DateInput';
import { fetchDonorProfile } from '../../api/profile/profile';

export default function DonorProfile() {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        email: '',
        password: '',
        weight: '',
        address: '',
        gender: '',
        lastDonation: '',
        dob: '',
        bloodType: '',
        medications: '',
        medicalCondition: '',
        photo: null,
    });

    const [isEditable, setIsEditable] = useState(false);

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProfile = async () => {
            if (!token) {
                console.error('No token found in localStorage');
                return;
            }

            try {
                const profileData = await fetchDonorProfile(token);
                console.log('Profile Data:', profileData);
                setFormData({
                    name: profileData.full_name || '',
                    id: profileData.national_id || '',
                    email: profileData.email || '',
                    weight: profileData.weight || '',
                    address: profileData.address || '',
                    gender: profileData.gender || '',
                    lastDonation: profileData.last_donation_date ? profileData.last_donation_date.split('T')[0] : '',
                    dob: profileData.birth_date ? profileData.birth_date.split('T')[0] : '',
                    bloodType: profileData.blood_type || '',
                    medications: profileData.medications || '',
                    medicalCondition: profileData.medical_conditions || '',
                    photo: profileData.donor_image || null, // use backend image URL
                });
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfile();
    }, [token]);

    const handleChange = (field) => (event) => {
        setFormData((data) => ({ ...data, [field]: event.target.value }));
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData((data) => ({ ...data, photo: file }));
        }
    };

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ];

    const bloodOptions = [
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' },
    ];

    const toggleEditMode = () => {
        setIsEditable((editable) => !editable);
    };

    return (
        <>
            <Navbar />
            <div className="container profile-container">
                <h1 className="profile-text" style={{ color: '#7a2617' }}>
                    Donor Profile
                </h1>
                <div className="d-flex align-items-start mb-4">
                    <div className="me-4 text-center">
                        <img
                            src={
                                formData.photo
                                    ? typeof formData.photo === 'string'
                                        ? formData.photo
                                        : URL.createObjectURL(formData.photo)
                                    : userPhoto
                            }
                            alt="User"
                            className="user-photo"
                        />
                        <br />
                        <label htmlFor="upload-photo" className="btn-change-photo">
                            Change Photo
                        </label>
                        <input
                            type="file"
                            id="upload-photo"
                            style={{ display: 'none' }}
                            onChange={handlePhotoChange}
                        />
                    </div>
                    <div className="flex-grow-1">
                        <form className="donor-form">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <TextInput
                                        label="Full Name"
                                        value={formData.name}
                                        onChange={handleChange('name')}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <TextInput
                                        label="National ID"
                                        value={formData.id}
                                        onChange={handleChange('id')}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <TextInput
                                        label="Email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange('email')}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <PasswordInput
                                        label="Password"
                                        value={formData.password}
                                        onChange={handleChange('password')}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <TextInput
                                        label="Weight (kg)"
                                        type="number"
                                        value={formData.weight}
                                        onChange={handleChange('weight')}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <TextInput
                                        label="Address"
                                        value={formData.address}
                                        onChange={handleChange('address')}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <SelectInput
                                        label="Gender"
                                        options={genderOptions}
                                        value={formData.gender}
                                        onChange={handleChange('gender')}
                                        placeholder="Choose..."
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <DateInput
                                        label="Last Donation Date"
                                        value={formData.lastDonation}
                                        onChange={handleChange('lastDonation')}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <DateInput
                                        label="Birth Date"
                                        value={formData.dob}
                                        onChange={handleChange('dob')}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <SelectInput
                                        label="Blood Type"
                                        options={bloodOptions}
                                        value={formData.bloodType}
                                        onChange={handleChange('bloodType')}
                                        placeholder="Choose Blood Type"
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <TextInput
                                        label="Medical Conditions"
                                        value={formData.medicalCondition}
                                        onChange={handleChange('medicalCondition')}
                                        disabled={!isEditable}
                                        isTextArea="true"
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <TextInput
                                        label="Medications"
                                        value={formData.medications}
                                        onChange={handleChange('medications')}
                                        disabled={!isEditable}
                                        isTextArea="true"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn update-btn mt-3"
                                onClick={toggleEditMode}
                            >
                                {isEditable ? 'Save Changes' : 'Edit Profile'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
