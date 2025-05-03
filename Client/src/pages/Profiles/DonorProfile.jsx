import React, { useState, useEffect } from 'react';
import '../../styles/all.min.css';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css';
import userPhoto from '../../assets/images/user-photo.png';
import Navbar from '../../Components/NavigationBar';
import TextInput from '../../components/Auth/TextInput';
import SelectInput from '../../components/Auth/SelectInput';
import DateInput from '../../components/Auth/DateInput';
import { fetchDonorProfile,updateDonorProfile } from '../../api/profile/profile';

export default function DonorProfile() {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        email: '',
        contact_phone: '',
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

    const [editableData, setEditableData] = useState({
        name: '',
        contact_phone: '',
        weight: '',
        address: '',
        lastDonation: '',
        bloodType: '',
        medications: '',
        medicalCondition: ''
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
                setFormData({
                    name: profileData.full_name || '',
                    id: profileData.national_id || '',
                    email: profileData.email || '',
                    weight: profileData.weight || '',
                    address: profileData.address || '',
                    gender: profileData.gender || '',
                    lastDonation: profileData.last_donation_date?.split('T')[0] || '',
                    dob: profileData.birth_date?.split('T')[0] || '',
                    bloodType: profileData.blood_type || '',
                    medications: profileData.medications || '',
                    medicalCondition: profileData.medical_conditions || '',
                    photo: profileData.donor_image || null,
                    contact_phone: profileData.contact_phone || '',
                });
                setEditableData({
                    name: profileData.full_name || '',
                    contact_phone: profileData.contact_phone || '',
                    weight: profileData.weight || '',
                    address: profileData.address || '',
                    lastDonation: profileData.last_donation_date?.split('T')[0] || '',
                    bloodType: profileData.blood_type || '',
                    medications: profileData.medications || '',
                    medicalCondition: profileData.medical_conditions || '',
                });
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfile();
    }, [token]);

    const handleChange = (field) => (event) => {
        setEditableData((data) => ({ ...data, [field]: event.target.value }));
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

    const handleSubmit = async () => {
        if (!token) {
            alert('Token not found.');
            return;
        }

        const updatedProfile = {
            full_name: editableData.name,
            contact_phone: editableData.contact_phone,
            weight: editableData.weight,
            address: editableData.address,
            blood_type: editableData.bloodType,
            medications: editableData.medications,
            medical_conditions: editableData.medicalCondition,
          };
          
          if (editableData.lastDonation) {
            updatedProfile.last_donation_date = new Date(editableData.lastDonation).toISOString();
          }
          

          try {
            const result = await updateDonorProfile(token, updatedProfile);
            console.log('Profile updated:', result);
            alert('Profile updated successfully!');
            setIsEditable(false);
          } catch (error) {
            console.error('Update failed:', error);
            alert(error.message || 'Failed to update profile.');
          }
    };

    const handleButtonClick = () => {
        if (isEditable) {
            handleSubmit(); // Save changes
        } else {
            setIsEditable(true); // Enable edit mode
        }
    };

    return (
        <>
            <Navbar />
            <div className="container profile-container">
                <h1 className="profile-text" style={{ color: '#7a2617' }}>Donor Profile</h1>
                <div className="d-flex align-items-start mb-4">
                    <div className="me-4 text-center">
                        <img
                            src={formData.photo ? formData.photo : userPhoto}
                            alt="User"
                            className="user-photo"
                        />
                    </div>
                    <div className="flex-grow-1">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <TextInput
                                    label="Full Name"
                                    value={editableData.name}
                                    onChange={handleChange('name')}
                                    disabled={!isEditable}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <TextInput
                                    label="National ID"
                                    value={formData.id}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <TextInput
                                    label="Email"
                                    type="email"
                                    value={formData.email}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <TextInput
                                    label="Phone Number"
                                    type="tel"
                                    value={editableData.contact_phone}
                                    onChange={handleChange('contact_phone')}
                                    disabled={!isEditable}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <TextInput
                                    label="Weight (kg)"
                                    type="number"
                                    value={editableData.weight}
                                    onChange={handleChange('weight')}
                                    disabled={!isEditable}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <TextInput
                                    label="Address"
                                    value={editableData.address}
                                    onChange={handleChange('address')}
                                    disabled={!isEditable}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <SelectInput
                                    label="Gender"
                                    options={genderOptions}
                                    value={formData.gender}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <DateInput
                                    label="Last Donation Date"
                                    value={editableData.lastDonation}
                                    onChange={handleChange('lastDonation')}
                                    disabled={!isEditable}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <DateInput
                                    label="Birth Date"
                                    value={formData.dob}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <SelectInput
                                    label="Blood Type"
                                    options={bloodOptions}
                                    value={editableData.bloodType}
                                    onChange={handleChange('bloodType')}
                                    disabled={!isEditable}
                                />
                            </div>
                            <div className="col-md-12 mb-3">
                                <TextInput
                                    label="Medical Conditions"
                                    value={editableData.medicalCondition}
                                    onChange={handleChange('medicalCondition')}
                                    disabled={!isEditable}
                                    isTextArea="true"
                                />
                            </div>
                            <div className="col-md-12 mb-3">
                                <TextInput
                                    label="Medications"
                                    value={editableData.medications}
                                    onChange={handleChange('medications')}
                                    disabled={!isEditable}
                                    isTextArea="true"
                                />
                            </div>
                        </div>
                        <button type="button" className="btn update-btn mt-3" onClick={handleButtonClick}>
                            {isEditable ? 'Save Changes' : 'Edit Profile'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
