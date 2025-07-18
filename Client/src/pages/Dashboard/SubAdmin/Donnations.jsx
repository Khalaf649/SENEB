import React, { useState } from "react";
import DataTable from "../../../components/DataTable";

export default function DonationsPage() {
    const allDonations = [
        {
            email: "ahmed@gmail.com",
            name: "Ahmed Ali",
            date: "2025-07-01",
            amount: "1 unit",
            status: "Successful",
        },
        {
            email: "sara@yahoo.com",
            name: "Sara Ibrahim",
            date: "2025-07-05",
            amount: "1 unit",
            status: "Successful",
        },
        {
            email: "mohamed@hotmail.com",
            name: "Mohamed Zaki",
            date: "2025-06-10",
            amount: "2 unit",
            status: "Failed",
        },
        {
            email: "laila@gmail.com",
            name: "Laila Nour",
            date: "2025-06-15",
            amount: "1 unit",
            status: "Successful",
        },
    ];

    const [search, setSearch] = useState("");
    const [month, setMonth] = useState("All");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const filteredDonations = allDonations.filter((d) => {
        const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());
        const matchesMonth =
            month === "All" ||
            new Date(d.date).toLocaleString("default", { month: "short" }) === month;

        return matchesSearch && matchesMonth;
    });

    const sortedDonations = [...filteredDonations].sort((a, b) => {
        if (!sortConfig.key) return 0;

        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (sortConfig.key === "date") {
            return new Date(aVal) - new Date(bVal) * (sortConfig.direction === "asc" ? 1 : -1);
        }

        if (sortConfig.key === "amount") {
            const parseAmount = (val) => {
                const unit = typeof val === "string" ? parseInt(val) : val;
                return isNaN(unit) ? 0 : unit;
            };
            return (
                (parseAmount(aVal) - parseAmount(bVal)) *
                (sortConfig.direction === "asc" ? 1 : -1)
            );
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
        const headers = ["Email", "Name", "Date", "Amount", "Status"];
        const rows = sortedDonations.map((d) => [
            d.email,
            d.name,
            d.date,
            d.status.toLowerCase() === "failed" ? 0 : d.amount,
            d.status,
        ]);

        const csvContent =
            "data:text/csv;charset=utf-8," +
            [headers, ...rows].map((e) => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "donations_report.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const formattedData = sortedDonations.map((d) => ({
        ...d,
        amount: d.status.toLowerCase() === "failed" ? 0 : d.amount,
    }));

    const donationColumns = [
        { header: "Email", accessor: "email" },
        { header: "Name", accessor: "name" },
        {
            header: (
                <span style={{ cursor: "pointer" }} onClick={() => requestSort("date")}>
                    Date {getSortIcon("date")}
                </span>
            ),
            accessor: "date",
        },
        { header: "Amount", accessor: "amount" },
        {
            header: "Status",
            accessor: "status",
            render: (value) => (
                <span className={value === "Successful" ? "text-success" : "text-danger"}>
                    {value}
                </span>
            ),
        },
    ];

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

            <DataTable
                columns={donationColumns}
                data={formattedData}
                className="table w-100 table-striped"
                headerClassName="table-danger"
                emptyMessage="No donations found."
            />

            <button
                className="btn operation-btn btn-outline-danger mt-3"
                onClick={downloadCSV}
            >
                Download CSV
            </button>
        </div>
    );
}
