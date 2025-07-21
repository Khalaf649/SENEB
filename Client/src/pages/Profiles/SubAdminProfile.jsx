import React, { useState } from "react";
import TextInput from "../../components/Auth/TextInput";

export default function SubAdminProfile() {
    const [personalInfo, setPersonalInfo] = useState({
        name: "Omar Adel",
        email: "omar.adel@bloodcenter.org",
        contact: "01065432198",
    });

    const [centerInfo, setCenterInfo] = useState({
        name: "Cairo Blood Center",
        address: "123 Tahrir Street, Cairo",
        contact: "01012345678",
    });

    const [showEditModal, setShowEditModal] = useState(false);
    const [editSection, setEditSection] = useState(""); // "personal" or "center"
    const [formData, setFormData] = useState({});

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const openEditModal = (section) => {
        setEditSection(section);
        setFormData(section === "personal" ? personalInfo : centerInfo);
        setShowEditModal(true);
    };

    const saveChanges = () => {
        if (editSection === "personal") setPersonalInfo(formData);
        else setCenterInfo(formData);
        setShowEditModal(false);
    };

    return (
        <div className="container registration-form">
            <h2>Subadmin Profile</h2>
            <hr />

            {/* Personal Info Section */}
            <div className="card p-4 mb-4 shadow-sm">
                <h5 className="info-title mb-3">Personal Information</h5>
                <div className="personal-fields mb-3">
                    <TextInput label="Name" value={personalInfo.name} disabled />
                    <TextInput label="Email" value={personalInfo.email} disabled />
                    <TextInput label="Contact" value={personalInfo.contact} disabled />
                </div>
                <div className="text-end">
                    <button
                        className="operation-btn"
                        onClick={() => openEditModal("personal")}
                    >
                        Edit Personal Info
                    </button>
                </div>
            </div>

            {/* Center Info Section */}
            <div className="card p-4 mb-4 shadow-sm">
                <h5 className="info-title mb-3">Center Information</h5>
                <div className="personal-fields mb-3">
                    <TextInput label="Center Name" value={centerInfo.name} disabled />
                    <TextInput label="Address" value={centerInfo.address} disabled />
                    <TextInput label="Contact" value={centerInfo.contact} disabled />
                </div>
                <div className="text-end">
                    <button
                        className="operation-btn"
                        onClick={() => openEditModal("center")}
                    >
                        Edit Center Info
                    </button>
                </div>
            </div>

            {/* Edit Modal */}
            {showEditModal && (
                <>
                    <div className="custom-modal-backdrop"></div>
                    <div className="modal fade show d-block custom-modal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content p-4">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        Edit {editSection === "personal" ? "Personal" : "Center"} Information
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowEditModal(false)}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {Object.keys(formData).map((key) => (
                                        <input
                                            key={key}
                                            name={key}
                                            className="form-control mb-3"
                                            value={formData[key]}
                                            onChange={handleChange}
                                            placeholder={key.replace("_", " ").toUpperCase()}
                                        />
                                    ))}
                                </div>
                                <div className="modal-footer d-flex justify-content-end gap-2">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setShowEditModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button className="operation-btn" onClick={saveChanges}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
