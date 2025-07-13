import React, { useState } from "react";

export default function ViewDonations() {
  const [selectedCenter, setSelectedCenter] = useState("All Centers");
  const donationsData = [
    {
      email: "ahmed@gmail.com",
      name: "Ahmed Ali",
      date: "2025-07-10",
      center: "Cairo Blood Center",
      status: "Successful",
      amount: "1 unit",
    },
    {
      email: "sara@yahoo.com",
      name: "Sara Mostafa",
      date: "2025-07-08",
      center: "Maadi Blood Center",
      status: "Failed",
      amount: "0 unit",
    },
    {
      email: "mohamed@hotmail.com",
      name: "Mohamed Youssef",
      date: "2025-07-05",
      center: "Zamalek Blood Center",
      status: "Successful",
      amount: "1 unit",
    },
    {
      email: "eman@gmail.com",
      name: "Eman Nabil",
      date: "2025-07-02",
      center: "Heliopolis Blood Center",
      status: "Successful",
      amount: "1 unit",
    },
    {
      email: "laila@outlook.com",
      name: "Laila Ahmed",
      date: "2025-07-12",
      center: "Cairo Blood Center",
      status: "Failed",
      amount: "0 unit",
    },
    {
      email: "omar@gmail.com",
      name: "Omar Salah",
      date: "2025-07-11",
      center: "Maadi Blood Center",
      status: "Successful",
      amount: "1 unit",
    },
    {
      email: "noor@yahoo.com",
      name: "Noor Hassan",
      date: "2025-07-09",
      center: "Zamalek Blood Center",
      status: "Successful",
      amount: "1 unit",
    },
  ];
  const filteredDonations =
    selectedCenter === "All Centers"
      ? donationsData
      : donationsData.filter((donation) => donation.center === selectedCenter);

  const totalDonations = filteredDonations.length;
  const successfulDonations = filteredDonations.filter(
    (d) => d.status === "Successful"
  ).length;
  const failedDonations = filteredDonations.filter(
    (d) => d.status === "Failed"
  ).length;
  const totalUnits = filteredDonations
    .filter((d) => d.status === "Successful")
    .reduce((sum, d) => sum + (parseInt(d.amount) || 0), 0);

  return (
    <div>
      <h2 className="mb-4">View Donations</h2>
      {/* Dropdown for filtering */}
      <label htmlFor="centerFilter" className="form-label">
        Filter by Center
      </label>
      <select
        className="search-input"
        value={selectedCenter}
        onChange={(e) => setSelectedCenter(e.target.value)}
      >
        <option>All Centers</option>
        <option>Cairo Blood Center</option>
        <option>Maadi Blood Center</option>
        <option>Zamalek Blood Center</option>
        <option>Heliopolis Blood Center</option>
      </select>

      <div className="stats-container">
        <div className="stats-card total">
          <h5>Total Donations</h5>
          <p>{totalDonations}</p>
        </div>
        <div className="stats-card success">
          <h5>Successful</h5>
          <p>{successfulDonations}</p>
        </div>
        <div className="stats-card failed">
          <h5>Failed</h5>
          <p>{failedDonations}</p>
        </div>
        <div className="stats-card units">
          <h5>Total Units Donated</h5>
          <p>{totalUnits} </p>
        </div>
      </div>

      {/* Table placeholder */}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Email</th>
              <th>User</th>
              <th>Date</th>
              <th>Center</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonations.map((donation, index) => (
              <tr key={index}>
                <td>{donation.email}</td>
                <td>{donation.name}</td>
                <td>{donation.date}</td>
                <td>{donation.center}</td>
                <td
                  className={
                    donation.status === "Successful"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {donation.status}
                </td>
                <td>{donation.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
