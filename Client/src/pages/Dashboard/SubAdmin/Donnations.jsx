import React, { useState } from "react";
import TextInput from "../../../components/Auth/TextInput";
import DataTable from "../../../components/DataTable";
import ExportData from "../../../components/ExportData";

export default function DonationsPage() {
    const [search, setSearch] = useState("");
    const [month, setMonth] = useState("All Months");
    const [statusFilter, setStatusFilter] = useState("All");

    const donations = [
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
            amount: "0 units",
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


    const months = [
        "All Months",
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];


    const filteredDonations = donations.filter((d) => {
        const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());
        const donationMonth = new Date(d.date).getMonth(); // 0-11
        const monthIndex = months.indexOf(month) - 1;
        const matchesMonth = month === "All Months" || donationMonth === monthIndex;

        const isFailed = d.amount === "0 units" || d.status === "Failed";
        const matchesStatus =
            statusFilter === "All" ||
            (statusFilter === "Failed" && isFailed) ||
            (statusFilter === "Successful" && !isFailed);

        return matchesSearch && matchesMonth && matchesStatus;
    });

    const columns = [
        { header: "Name", accessor: "name" },
        { header: "Email", accessor: "email" },
        { header: "Date", accessor: "date" },
        { header: "Amount", accessor: "amount" },
        {
            header: "Status",
            accessor: "status",
            render: (row) => {
                const isFailed =
                    typeof row.amount === "string" && row.amount.trim().startsWith("0");

                if (isFailed || row.status === "Failed") {
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