import React, { useEffect, useState } from "react";
import { createBloodCenter, getBloodCenters, updateBloodCenter, deleteBloodCenter } from "../../../api/admin/admin";
export default function ManageBloodCenters() {
  const [bloodCenters, setBloodCenters] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newCenter, setNewCenter] = useState({
    name: "",
    address: "",
    contact: "",
  });

  // 🔁 Load centers from backend
  useEffect(() => {
    const fetchCenters = async () => {
      const data = await getBloodCenters();
      console.log(data)
      if (data) setBloodCenters(data);
    };
    fetchCenters();
  }, []);

  const handleAddCenter = async () => {
    const { name, address, contact } = newCenter;

    if (!name || !address || !contact) {
      alert("Please fill in all fields.");
      return;
    }

    if (editId) {
      // 🔁 Call update API
      const result = await updateBloodCenter(editId, newCenter);
      if (result) {
        // Update local state
        const updatedList = bloodCenters.map((center) =>
          center.center_id === editId ? result : center
        );
        setBloodCenters(updatedList);
        alert("Center updated successfully!");
         window.location.reload(); // 🔁 Reload after successful update
      }
      setEditId(null);
    } else {
      // ➕ Call create API
      const result = await createBloodCenter(newCenter);
      if (result) {
        setBloodCenters([...bloodCenters, result]);
        alert("Center added successfully!");
        window.location.reload(); // 🔁 Reload after successful add
      }
    }

    // Reset form
    setNewCenter({ name: "", address: "", contact: "" });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this center?");
    if (!confirmed) return;

    const result = await deleteBloodCenter(id);

    if (result) {
      setBloodCenters((prev) => prev.filter((center) => center.id !== id));
      alert("Center deleted successfully.");
      window.location.reload(); // 🔁 Reload after successful add
    }
  };

  return (
    <div className="manage-blood-centers">
      <h2 className="mb-4">Manage Blood Centers</h2>

      {/* Add Center Form */}
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
            <button className="addCenter-btn" onClick={handleAddCenter}>
              {editId ? "Save Changes" : "Add Center"}
            </button>
            <button
              className="cancel-btn"
              onClick={() => {
                setNewCenter({ name: "", address: "", contact: "" });
                setEditId(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Preview Cards */}
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
