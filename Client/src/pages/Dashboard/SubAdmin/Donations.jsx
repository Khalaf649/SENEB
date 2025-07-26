import React, { useState, useEffect } from "react";
import TextInput from "../../../components/Auth/TextInput";
import DataTable from "../../../components/DataTable";
import ExportData from "../../../components/ExportData";
import { fetchDonations } from "../../../api/subAdmin/donations";

export default function DonationsPage() {
    const [search, setSearch] = useState("");
    const [month, setMonth] = useState("All Months");
    const [statusFilter, setStatusFilter] = useState("All");
    const [donations, setDonations] = useState([]);

    const months = [
        "All Months",
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) return;

        fetchDonations(token)
            .then(setDonations)
            .catch((err) => {
                console.error("Failed to fetch donations:", err);
            })
    }, []);


    const filteredDonations = donations.filter((d) => {
        const matchesSearch = d.User.toLowerCase().includes(search.toLowerCase());

        const donationMonth = new Date(d.date).getMonth(); // 0-11
        const monthIndex = months.indexOf(month) - 1;
        const matchesMonth = month === "All Months" || donationMonth === monthIndex;

        const isFailed = d.Amount === "0 units" || d.Status === "Failed";
        const matchesStatus =
            statusFilter === "All" ||
            (statusFilter === "Failed" && isFailed) ||
            (statusFilter === "Successful" && !isFailed);

        return matchesSearch && matchesMonth && matchesStatus;
    });

    const columns = [
        { header: "Name", accessor: "User" },
        { header: "Email", accessor: "Email" },
        { header: "Date", accessor: "Date" },
        { header: "Amount", accessor: "Amount" },
        {
            header: "Status",
            accessor: "Status",
            render: (row) => {
                const isFailed =
                    typeof row.Amount === "string" && row.Amount.trim().startsWith("0");

                if (isFailed || row.Status === "Failed") {
                    return <span className="text-danger fw-semibold">Failed</span>;
                }

                return <span className="text-success fw-semibold">Successful</span>;
            },
        },
    ];


    return (
        <div className="container mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-4 title">Center Donations</h2>
                <div>
                    <button
                        className="operation-btn me-2"
                        onClick={() => ExportData("donations.csv", filteredDonations, columns)}
                    >
                        Download CSV
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="row mb-3">
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
                        {months.map((m) => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4 mb-2">
                    <select
                        className="form-select"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All Statuses</option>
                        <option value="Successful">Successful</option>
                        <option value="Failed">Failed</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <DataTable
                columns={columns}
                data={filteredDonations}
                emptyMessage="No donations found."
                exportFileName="donation.csv"
                className="table w-100 table-striped"
                headerClassName="table-danger"
            />
        </div>
    );
}