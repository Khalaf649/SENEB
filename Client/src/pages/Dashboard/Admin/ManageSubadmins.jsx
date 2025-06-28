import React, { useState, useEffect } from "react";
import {
  createSubadmin,
  getBloodCenters,
  getAllSubadmins,
  deleteSubadmin,
} from "../../../api/admin/admin";
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [subadminToDelete, setSubadminToDelete] = useState(null);

  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const centers = await getBloodCenters("without");
      if (centers) setBloodCentersList(centers);
      const subadminRes = await getAllSubadmins();
      if (subadminRes.success) {
        setSubadmins(
          subadminRes.data.map((s) => ({
            id: s.id,
            sub_admin_id: s.sub_admin_id,
            user: {
              name: s.name,
              email: s.email,
              contact: s.contact,
            },
            bloodcenter: {
              center_id: s.center_id,
              center_name: s.center_name,
            },
          }))
        );
      }
    };
    fetchInitialData();
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
        confirm_password: newSubadmin.confirmPassword,
      };

      try {
        const res = await createSubadmin(payload);
        if (res.success) {
          const center = bloodCentersList.find(
            (c) => c.center_id === newSubadmin.bloodcenterId
          );
          const newEntry = {
            sub_admin_id: Date.now(),
            id: Date.now(),
            user: {
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

  const confirmDelete = async () => {
    if (!subadminToDelete) return;
    try {
      const res = await deleteSubadmin(subadminToDelete);
      if (res.success) {
        setSubadmins((prev) => prev.filter((s) => s.id !== subadminToDelete));
        setSuccess("Subadmin deleted successfully.");
      } else {
        setError(res.error || "Failed to delete subadmin.");
      }
    } catch {
      setError("Something went wrong while deleting.");
    }
    setShowDeleteModal(false);
    setSubadminToDelete(null);
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

      {success && (
        <div className="mb-3 text-center">
          <div className="text-success">{success}</div>
        </div>
      )}

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
              (s) =>
                s.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                s.user.email.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((subadmin, index) => (
              <tr key={subadmin.id}>
                <td>{index + 1}</td>
                <td>{subadmin.user.name}</td>
                <td>{subadmin.user.email}</td>
                <td>{subadmin.user.contact || "-"}</td>
                <td>{subadmin.bloodcenter?.center_name || "-"}</td>
                <td className="d-flex justify-content-center gap-2">
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
                    onClick={() => {
                      setSubadminToDelete(subadmin.id);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Modal for Add/Edit */}
      {showModal && (
  <>
    <div className="custom-modal-backdrop"></div>
    <div className="modal fade show d-block custom-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{editId ? "Edit Subadmin" : "Add New Subadmin"}</h5>
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
            <TextInput
              label="Name"
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
                  onChange={(e) => setNewSubadmin({ ...newSubadmin, password: e.target.value })}
                />
                <PasswordInput
                  label="Confirm Password"
                  value={newSubadmin.confirmPassword}
                  onChange={(e) =>
                    setNewSubadmin({ ...newSubadmin, confirmPassword: e.target.value })
                  }
                />
              </>
            )}
            <TextInput
              label="Contact Info"
              value={newSubadmin.contact}
              onChange={(e) => setNewSubadmin({ ...newSubadmin, contact: e.target.value })}
            />
            <div className="form-group mb-3">
              <label>Blood Center</label>
              <select
                className="form-select"
                value={newSubadmin.bloodcenterId}
                onChange={(e) =>
                  setNewSubadmin({ ...newSubadmin, bloodcenterId: parseInt(e.target.value) })
                }
              >
                <option value="">Select a center</option>
                {bloodCentersList.map((c) => (
                  <option key={c.center_id} value={c.center_id}>
                    {c.center_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="modal-footer flex-column align-items-stretch gap-2">
            {error && (
              <div className="text-danger text-center w-100 small" style={{ marginTop: "-8px" }}>
                {error}
              </div>
            )}
            <div className="d-flex justify-content-end gap-2 w-100">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="operation-btn" onClick={handleSubmit} disabled={loading}>
                {loading ? "Submitting..." : editId ? "Save Changes" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)}


      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <>
          <div className="custom-modal-backdrop"></div>
          <div className="modal fade show d-block custom-modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-3">
                <h5 className="mb-3">Confirm Deletion</h5>
                <p>Are you sure you want to delete this subadmin?</p>
                <div className="d-flex justify-content-end gap-2">
                  <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-danger" onClick={confirmDelete}>
                    Delete
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
