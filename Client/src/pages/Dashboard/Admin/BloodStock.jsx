import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const unitsData = [
  { id: "U001", center: "Dokki", type: "A+", expiry: "2025-08-10" },
  { id: "U002", center: "Helioplis", type: "O-", expiry: "2025-08-12" },
  { id: "U003", center: "Maadi", type: "B+", expiry: "2025-08-14" },
  { id: "U004", center: "Zamalek", type: "A-", expiry: "2025-08-09" },
  { id: "U005", center: "SDokki", type: "O+", expiry: "2025-08-15" },
];
const bloodStockData = [
  { type: "A+", units: 20 },
  { type: "A-", units: 15 },
  { type: "B+", units: 18 },
  { type: "B-", units: 10 },
  { type: "AB+", units: 8 },
  { type: "AB-", units: 5 },
  { type: "O+", units: 25 },
  { type: "O-", units: 12 },
];

export default function BloodStockSummary() {
  const [filterType, setFilterType] = useState("");
  const filteredUnits = filterType
    ? unitsData.filter((unit) => unit.type === filterType)
    : unitsData;

  return (
    <div>
      <h2 id="blood-stock-summary-title">Current Blood Stock</h2>

      <div className="blood-stock-summary-container">
        <div className="blood-summary-card available-units">
          <p className="card-title">Total Units Available</p>
          <p className="card-number">120</p>
        </div>
        <div className="blood-summary-card expiring-units">
          <p className="card-title">Units Expiring This Week</p>
          <p className="card-number">8</p>
        </div>
        <div className="blood-summary-card total-donations">
          <p className="card-title">Total Donations This Month</p>
          <p className="card-number">45</p>
        </div>
      </div>
      <div className="blood-stock-content">
        <div className="left-section">
          <div className="filter-container">
            <label htmlFor="typeFilter" id="filter-label">
              Filter by Type:
            </label>
            <select
              id="typeFilter"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">All</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <table className="blood-units-table">
            <thead>
              <tr>
                <th>Unit ID</th>
                <th>Center</th>
                <th>Type</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredUnits.map((unit) => (
                <tr key={unit.id}>
                  <td>{unit.id}</td>
                  <td>{unit.center}</td>
                  <td>{unit.type}</td>
                  <td>{unit.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="right-section">
          <h3 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            Stock Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={bloodStockData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="units"
                fill="#7a2617"
                barSize={30}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
