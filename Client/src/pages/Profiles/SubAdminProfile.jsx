import React, { useState } from "react";
import TextInput from "../../components/Auth/TextInput";

export default function SubAdminProfile() {
    const [personalInfo, setPersonalInfo] = useState({
        name: "Salma Ali",
        email: "salma@bloodcenter.org",
        contact: "01065432198",
    });

    const [centerInfo, setCenterInfo] = useState({
        name: "Cairo Blood Center",
        address: "123 Tahrir Street, Cairo",
        contact: "14678",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        ...personalInfo,
        ...centerInfo,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const saveChanges = () => {
        const updatedPersonal = {
            name: formData.name,
            email: formData.email,
            contact: formData.contact,
        };

        const updatedCenter = {
            name: formData.centerName,
            address: formData.address,
            contact: formData.centerContact,
        };

        setPersonalInfo(updatedPersonal);
        setCenterInfo(updatedCenter);
        setIsEditing(false);
    };

    return (
        <div className="container subadmin-info">
            <h2>Subadmin Profile</h2>
            <p>Manage and update your profile information</p>
            <hr />

            {/* Personal Info */}
            <span className="info-title mb-3">Personal Information:</span>
            <div className="personal-fields mb-3">
                <TextInput
                    label="Name"
                    name="name"
                    value={isEditing ? formData.name : personalInfo.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
                <TextInput
                    label="Email"
                    name="email"
                    value={isEditing ? formData.email : personalInfo.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
                <TextInput
                    label="Contact"
                    name="contact"
                    value={isEditing ? formData.contact : personalInfo.contact}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>

            {/* Center Info */}
            <span className="info-title mb-3">Center Information:</span>
            <div className="personal-fields mb-3">
                <TextInput
                    label="Center Name"
                    name="centerName"
                    value={isEditing ? formData.centerName ?? centerInfo.name : centerInfo.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
                <TextInput
                    label="Address"
                    name="address"
                    value={isEditing ? formData.address ?? centerInfo.address : centerInfo.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
                <TextInput
                    label="Contact"
                    name="centerContact"
                    value={isEditing ? formData.centerContact ?? centerInfo.contact : centerInfo.contact}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>

            <div className="text-end mt-3">
                {!isEditing ? (
                    <button
                        className="operation-btn"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Info
                    </button>
                ) : (
                    <>
                        <button
                            className="btn btn-secondary me-2"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="operation-btn"
                            onClick={saveChanges}
                        >
                            Save Changes
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
