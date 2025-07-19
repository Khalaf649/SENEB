import React, { useState } from "react";

export default function DonationsPage() {
    const allDonations = [
        { donor: "Ahmed Ali", contact: "01274615810", date: "2025-07-01", amount: 1, bloodType: "A+" },
        { donor: "Sara Ibrahim", contact: "0115595998", date: "2025-07-05", amount: 1, bloodType: "O+" },
        { donor: "Mohamed Zaki", contact: "0109988776", date: "2025-06-10", amount: 2, bloodType: "B+" },
        { donor: "Laila Nour", contact: "0101122334", date: "2025-06-15", amount: 1, bloodType: "A+" },
        // Add more sample data...
    ];

    const [search, setSearch] = useState("");
    const [bloodType, setBloodType] = useState("All");
    const [month, setMonth] = useState("All");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const filteredDonations = allDonations.filter((d) => {
        const matchesSearch = d.donor.toLowerCase().includes(search.toLowerCase());
        const matchesBlood = bloodType === "All" || d.bloodType === bloodType;
        const matchesMonth =
            month === "All" ||
            new Date(d.date).toLocaleString("default", { month: "short" }) === month;

        return matchesSearch && matchesBlood && matchesMonth;
    });
    const sortedDonations = [...filteredDonations].sort((a, b) => {
        if (!sortConfig.key) return 0;

        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (sortConfig.key === "date") {
            const aDate = new Date(aVal);
            const bDate = new Date(bVal);
            return sortConfig.direction === "asc"
                ? aDate - bDate
                : bDate - aDate;
        }

        if (sortConfig.key === "amount") {
            return sortConfig.direction === "asc"
                ? aVal - bVal
                : bVal - aVal;
        }

        return 0;
    });

    const requestSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "asc" ? "▲" : "▼";
        }
        return "⇅";
    };
    const downloadCSV = () => {
        const headers = ["Donor Name", "Contact", "Date", "Amount (Units)", "Blood Type"];
        const rows = filteredDonations.map(d => [d.donor, d.contact, d.date, d.amount, d.bloodType]);

        let csvContent =
            "data:text/csv;charset=utf-8," +
            [headers, ...rows].map(e => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "donations_report.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4 title">Center Donations</h2>

            <div className="row mb-4">
                <div className="col-md-4 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by donor name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="col-md-4 mb-2">
                    <select
                        className="form-select"
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
                    >
                        <option value="All">All Blood Types</option>
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
                <div className="col-md-4 mb-2">
                    <select
                        className="form-select"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    >
                        <option value="All">All Months</option>
                        <option value="Jan">January</option>
                        <option value="Feb">February</option>
                        <option value="Mar">March</option>
                        <option value="Apr">April</option>
                        <option value="May">May</option>
                        <option value="Jun">June</option>
                        <option value="Jul">July</option>
                        <option value="Aug">August</option>
                        <option value="Sep">September</option>
                        <option value="Oct">October</option>
                        <option value="Nov">November</option>
                        <option value="Dec">December</option>
                    </select>
                </div>
            </div>

            <table className="table table-bordered table-striped">
                <thead className="table-danger">
                    <tr>
                        <th>Donor</th>
                        <th>Contact</th>
                        <th onClick={() => requestSort("date")} style={{ cursor: "pointer" }}>
                            Date {getSortIcon("date")}
                        </th>
                        <th onClick={() => requestSort("amount")} style={{ cursor: "pointer" }}>
                            Amount (Units) {getSortIcon("amount")}
                        </th>
                        <th>Blood Type</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedDonations.map((d, idx) => (
                        <tr key={idx}>
                            <td>{d.donor}</td>
                            <td>{d.contact}</td>
                            <td>{d.date}</td>
                            <td>{d.amount}</td>
                            <td>{d.bloodType}</td>
                        </tr>
                    ))}
                    {sortedDonations.length === 0 && (
                        <tr>
                            <td colSpan="5" className="text-center">No donations found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <button className="btn operation-btn btn-outline-danger mt-3" onClick={downloadCSV}>
                Download CSV
            </button>
        </div>
    );
}
