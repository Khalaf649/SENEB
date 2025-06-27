import React, { useState, useEffect } from "react";
import { createSubadmin, getBloodCenters } from "../../../api/admin/admin";
import TextInput from "../../../components/Auth/TextInput";
import PasswordInput from "../../../components/Auth/PasswordInput";

export default function ManageSubadmins() {
  const [subadmins, setSubadmins] = useState([]);
  const [bloodCentersList, setBloodCentersList] = useState([]);
  const [newSubadmin, setNewSubadmin] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    bloodcenterId: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCenters = async () => {
      const centers = await getBloodCenters();
      if (centers) {
        setBloodCentersList(centers);
      } else {
        setError("Failed to load blood centers.");
      }
    };
    fetchCenters();
  }, []);

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    if (
      !newSubadmin.name ||
      !newSubadmin.email ||
      (!editId && (!newSubadmin.password || !newSubadmin.confirmPassword)) ||
      !newSubadmin.bloodcenterId
    ) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    if (!editId && newSubadmin.password !== newSubadmin.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (editId) {
      setSubadmins(
        subadmins.map((s) =>
          s.sub_admin_id === editId
            ? {
                ...s,
                user: {
                  ...s.user,
                  name: newSubadmin.name,
                  email: newSubadmin.email,
                  contact: newSubadmin.contact,
                },
                bloodcenter: bloodCentersList.find(
                  (center) => center.center_id === newSubadmin.bloodcenterId
                ),
              }
            : s
        )
      );
      setSuccess("Subadmin updated successfully.");
      setEditId(null);
      setShowModal(false);
    } else {
      const payload = {
        name: newSubadmin.name,
        email: newSubadmin.email,
        password: newSubadmin.password,
        contact: newSubadmin.contact,
        center_id: newSubadmin.bloodcenterId,
      };

      try {
        const res = await createSubadmin(payload);

        if (res.success) {
          const center = bloodCentersList.find(
            (c) => c.center_id === newSubadmin.bloodcenterId
          );

          if (!center) {
            setError("Selected blood center not found.");
            setLoading(false);
            return;
          }

          const newEntry = {
            sub_admin_id: Date.now(),
            user: {
              id: Date.now() + 1,
              name: newSubadmin.name,
              email: newSubadmin.email,
              contact: newSubadmin.contact,
            },
            bloodcenter: {
              center_id: center.center_id,
              center_name: center.center_name,
            },
          };

          setSubadmins([...subadmins, newEntry]);
          setSuccess("Subadmin created successfully.");
          setShowModal(false);
        } else {
          setError(res.error || "Failed to create subadmin.");
        }
      } catch {
        setError("Something went wrong. Please try again.");
      }
    }

    setNewSubadmin({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      contact: "",
      bloodcenterId: "",
    });

    setLoading(false);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this subadmin?");
    if (confirmed) {
      setSubadmins(subadmins.filter((subadmin) => subadmin.sub_admin_id !== id));
    }
  };

  return (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-4 manage-subadmin-header">
      <h2 className="mb-4">Manage Subadmins</h2>
      <button className="operation-btn add-subadmin-btn" onClick={() => setShowModal(true)}>
        Add Subadmin
      </button>
    </div>

    <div className="mb-3">
      <input
        type="text"
        className="search-input"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    <table className="table table-hover table-bordered align-middle text-center shadow-sm">
      <thead className="subadmin-header">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Blood Center</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {subadmins
          .filter(
            (subadmin) =>
              subadmin.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              subadmin.user.email.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((subadmin, index) => (
            <tr key={subadmin.sub_admin_id}>
              <td>{index + 1}</td>
              <td>{subadmin.user.name}</td>
              <td>{subadmin.user.email}</td>
              <td>{subadmin.user.contact || "-"}</td>
              <td>{subadmin.bloodcenter?.center_name || "-"}</td>
              <td className="manage-subadmin-actions d-flex justify-content-center gap-2">
                <button
                  className="operation-btn"
                  onClick={() => {
                    setNewSubadmin({
                      name: subadmin.user.name,
                      email: subadmin.user.email,
                      contact: subadmin.user.contact || "",
                      password: "",
                      confirmPassword: "",
                      bloodcenterId: subadmin.bloodcenter.center_id,
                    });
                    setEditId(subadmin.sub_admin_id);
                    setShowModal(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleDelete(subadmin.sub_admin_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>

    {showModal && (
      <>
        <div className="custom-modal-backdrop"></div>
        <div className="modal fade show d-block custom-modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editId ? "Edit Subadmin" : "Add New Subadmin"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    setError("");
                    setSuccess("");
                  }}
                ></button>
              </div>

              <div className="modal-body">
                {error && <div className="text-danger text-center mb-2">{error}</div>}
                {success && <div className="text-success text-center mb-2">{success}</div>}

                <TextInput
                  label="Name"
                  type="text"
                  value={newSubadmin.name}
                  onChange={(e) => setNewSubadmin({ ...newSubadmin, name: e.target.value })}
                />

                <TextInput
                  label="Email"
                  type="email"
                  value={newSubadmin.email}
                  onChange={(e) => setNewSubadmin({ ...newSubadmin, email: e.target.value })}
                />

                {!editId && (
                  <>
                    <PasswordInput
                      label="Password"
                      value={newSubadmin.password}
                      onChange={(e) =>
                        setNewSubadmin({ ...newSubadmin, password: e.target.value })
                      }
                    />
                    <PasswordInput
                      label="Confirm Password"
                      value={newSubadmin.confirmPassword || ""}
                      onChange={(e) =>
                        setNewSubadmin({ ...newSubadmin, confirmPassword: e.target.value })
                      }
                    />
                  </>
                )}

                <TextInput
                  label="Contact Info"
                  type="text"
                  value={newSubadmin.contact}
                  onChange={(e) => setNewSubadmin({ ...newSubadmin, contact: e.target.value })}
                />

                <div className="mb-3 form-group">
                  <label className="form-label">Blood Center</label>
                  <select
                    className="form-select select-center"
                    value={newSubadmin.bloodcenterId}
                    onChange={(e) =>
                      setNewSubadmin({
                        ...newSubadmin,
                        bloodcenterId: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value="">Select a center</option>
                    {bloodCentersList.map((center) => (
                      <option key={center.center_id} value={center.center_id}>
                        {center.center_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowModal(false);
                    setError("");
                    setSuccess("");
                  }}
                >
                  Cancel
                </button>
                <button className="operation-btn" onClick={handleSubmit} disabled={loading}>
                  {loading ? "Submitting..." : editId ? "Save Changes" : "Add"}
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
