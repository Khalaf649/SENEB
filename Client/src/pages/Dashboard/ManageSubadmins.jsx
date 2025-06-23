import React, { useState } from "react";

export default function ManageSubadmins() {
  const [subadmins, setSubadmins] = useState([
    {
      sub_admin_id: 1,
      user: {
        id: 101,
        name: "Ahmed Ali",
        email: "ahmed@example.com",
      },
      bloodcenter: {
        id: 5,
        name: "Cairo Blood Center",
      },
    },
    {
      sub_admin_id: 2,
      user: {
        id: 102,
        name: "Sara Ibrahim",
        email: "sara@example.com",
      },
      bloodcenter: {
        id: 7,
        name: "Alexandria Blood Center",
      },
    },
  ]);

  const [newSubadmin, setNewSubadmin] = useState({
    name: "",
    email: "",
    bloodcenterId: "",
  });

  const [showModal, setShowModal] = useState(false);

  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const bloodCentersList = [
    { id: 5, name: "Cairo Blood Center" },
    { id: 6, name: "Giza Blood Center" },
    { id: 7, name: "Alexandria Blood Center" },
  ];

  const handleSubmit = () => {
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
                },
                bloodcenter: bloodCentersList.find(
                  (center) => center.id === newSubadmin.bloodcenterId
                ),
              }
            : s
        )
      );
    } else {
      const newEntry = {
        sub_admin_id: Date.now(), // unique ID
        user: {
          id: Date.now() + 1,
          name: newSubadmin.name,
          email: newSubadmin.email,
        },
        bloodcenter: bloodCentersList.find(
          (center) => center.id === newSubadmin.bloodcenterId
        ),
      };
      setSubadmins([...subadmins, newEntry]);
    }

    setNewSubadmin({ name: "", email: "" });

    setEditId(null);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this subadmin?"
    );
    if (confirmed) {
      setSubadmins(subadmins.filter((subadmin) => subadmin.id !== id));
    }
  };

  return (
    <div>
      <h2 className="mb-4">Manage Subadmins</h2>

      {/* Add Button */}
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        Add New Subadmin
      </button>

      {/* Search Box */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="table table-hover align-middle shadow-sm rounded">
        <thead>
          <tr>
            <th>#</th>
            <th>Sub Admin ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Blood Center</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subadmins
            .filter(
              (subadmin) =>
                subadmin.user.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                subadmin.user.email
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            )
            .map((subadmin, index) => (
              <tr key={subadmin.sub_admin_id}>
                <td>{index + 1}</td>
                <td>{subadmin.sub_admin_id}</td>
                <td>{subadmin.user.name}</td>
                <td>{subadmin.user.email}</td>
                <td>{subadmin.bloodcenter.name}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setNewSubadmin({
                        name: subadmin.user.name,
                        email: subadmin.user.email,
                        bloodcenterId: subadmin.bloodcenter.id,
                      });

                      setEditId(subadmin.sub_admin_id);
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(subadmin.sub_admin_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editId ? "Edit Subadmin" : "Add New Subadmin"}
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newSubadmin.name}
                    onChange={(e) =>
                      setNewSubadmin({ ...newSubadmin, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={newSubadmin.email}
                    onChange={(e) =>
                      setNewSubadmin({ ...newSubadmin, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Blood Center</label>
                  <select
                    className="form-select"
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
                      <option key={center.id} value={center.id}>
                        {center.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button className="btn btn-primary" onClick={handleSubmit}>
                  {editId ? "Save Changes" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
