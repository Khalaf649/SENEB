import React, { useEffect, useState } from "react";
import {
  createBloodCenter,
  getBloodCenters,
  updateBloodCenter,
  deleteBloodCenter,
} from "../../../api/admin/admin";

export default function ManageBloodCenters() {
  const [bloodCenters, setBloodCenters] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newCenter, setNewCenter] = useState({
    name: "",
    address: "",
    contact: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch blood centers on mount
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const data = await getBloodCenters();
        if (data) setBloodCenters(data);
      } catch (error) {
        setErrorMessage(error.message || "Failed to load blood centers.");
      }
    };
    fetchCenters();
  }, []);

  // Auto-dismiss messages after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [errorMessage, successMessage]);

  const resetForm = () => {
    setNewCenter({ name: "", address: "", contact: "" });
    setEditId(null);
  };

  const handleAddCenter = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    const { name, address, contact } = newCenter;

    if (!name || !address || !contact) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      if (editId) {
        const updated = await updateBloodCenter(editId, newCenter);
        if (updated) {
          const updatedList = bloodCenters.map((center) =>
            center.center_id === editId ? updated : center
          );
          setBloodCenters(updatedList);
          setSuccessMessage("Center updated successfully.");
        }
      } else {
        const created = await createBloodCenter(newCenter);
        if (created) {
          setBloodCenters([...bloodCenters, created]);
          setSuccessMessage("Center added successfully.");
        }
      }
      resetForm();
    } catch (error) {
      setErrorMessage(error.message || "Failed to save center.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this center?");
    if (!confirmed) return;

    setErrorMessage("");
    setSuccessMessage("");

    try {
      await deleteBloodCenter(id);
      setBloodCenters((prev) => prev.filter((center) => center.center_id !== id));
      setSuccessMessage("Center deleted successfully.");
    } catch (error) {
      setErrorMessage(error.message || "Failed to delete center.");
    }
  };

  return (
    <div className="manage-blood-centers">
      <h2 className="mb-4">Manage Blood Centers</h2>

      {/* Status Messages */}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      {/* Add/Edit Center Form */}
      <div className="blood-center-form card p-4 shadow-sm mb-4">
        <h5 className="form-title mb-3">
          {editId ? "Edit Blood Center" : "Add New Blood Center"}
        </h5>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control input-field"
              placeholder="Center Name"
              value={newCenter.name}
              onChange={(e) =>
                setNewCenter({ ...newCenter, name: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control input-field"
              placeholder="Address"
              value={newCenter.address}
              onChange={(e) =>
                setNewCenter({ ...newCenter, address: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control input-field"
              placeholder="Contact Info"
              value={newCenter.contact}
              onChange={(e) =>
                setNewCenter({ ...newCenter, contact: e.target.value })
              }
            />
          </div>
          <div className="col-md-12 text-end mt-3">
            <button className="addCenter-btn me-2" onClick={handleAddCenter}>
              {editId ? "Save Changes" : "Add Center"}
            </button>
            <button className="cancel-btn" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Blood Center Cards */}
      <div className="row">
        {bloodCenters.map((center) => (
          <div key={center.center_id} className="col-md-4 mb-3">
            <div className="blood-center-card d-flex flex-column justify-content-between h-100">
              <div>
                <h5>{center.center_name}</h5>
                <p className="mb-1">
                  <strong>Address:</strong> {center.address}
                </p>
                <p>
                  <strong>Contact:</strong> {center.contact_info}
                </p>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button
                  className="btn btn-sm btn-edit me-2"
                  onClick={() => {
                    setNewCenter({
                      name: center.center_name,
                      address: center.address,
                      contact: center.contact_info,
                    });
                    setEditId(center.center_id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-delete"
                  onClick={() => handleDelete(center.center_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
