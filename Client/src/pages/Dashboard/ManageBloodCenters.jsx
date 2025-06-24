import React, { useState } from "react";

export default function ManageBloodCenters() {
  const [bloodCenters, setBloodCenters] = useState([
    {
      id: 1,
      name: "Cairo Blood Center",
      address: "123 Nile Street, Cairo",
      contact: "01012345678",
    },
    {
      id: 2,
      name: "Alexandria Blood Center",
      address: "45 Sea Road, Alexandria",
      contact: "01234567890",
    },
    {
      id: 3,
      name: "Nasr City Blood Center",
      address: "18 Abbas El Akkad Street, Nasr City",
      contact: "01099887766",
    },
    {
      id: 4,
      name: "Heliopolis Blood Center",
      address: "56 El Merghany Street, Heliopolis",
      contact: "01111222333",
    },
    {
      id: 5,
      name: "Maadi Blood Center",
      address: "22 Road 9, Maadi",
      contact: "01223334455",
    },
    {
      id: 6,
      name: "Zamalek Blood Center",
      address: "15 Brazil Street, Zamalek",
      contact: "01055667788",
    },
  ]);

  const [editId, setEditId] = useState(null);

  const [newCenter, setNewCenter] = useState({
    name: "",
    address: "",
    contact: "",
  });

  const handleAddCenter = () => {
    if (!newCenter.name || !newCenter.address || !newCenter.contact) {
      alert("Please fill in all fields.");
      return;
    }

    if (editId) {
      const updated = bloodCenters.map((center) =>
        center.id === editId ? { ...center, ...newCenter } : center
      );
      setBloodCenters(updated);
      setEditId(null);
    } else {
      const newEntry = {
        id: Date.now(),
        ...newCenter,
      };
      setBloodCenters([...bloodCenters, newEntry]);
      alert(
        editId ? "Center updated successfully!" : "Center added successfully!"
      );
    }

    // Clear form
    setNewCenter({ name: "", address: "", contact: "" });
  };
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this center?"
    );
    if (confirmed) {
      setBloodCenters(bloodCenters.filter((center) => center.id !== id));
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
          <div key={center.id} className="col-md-4 mb-3">
            <div className="blood-center-card d-flex flex-column justify-content-between h-100">
              <div>
                <h5>{center.name}</h5>
                <p className="mb-1">
                  <strong>Address:</strong> {center.address}
                </p>
                <p>
                  <strong>Contact:</strong> {center.contact}
                </p>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button
                  className="btn btn-sm btn-edit me-2"
                  onClick={() => {
                    setNewCenter({
                      name: center.name,
                      address: center.address,
                      contact: center.contact,
                    });
                    setEditId(center.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-delete"
                  onClick={() => handleDelete(center.id)}
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
