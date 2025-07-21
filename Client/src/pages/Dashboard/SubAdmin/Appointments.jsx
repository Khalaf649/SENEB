import React, { useState } from "react";
import DataTable from "../../../components/DataTable";
import TextInput from "../../../components/Auth/TextInput";

export default function Appointments() {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            name: "Ahmed Ali",
            email: "ahmed@gmail.com",
            date: "2025-07-18",
            time: "10:00 AM",
            status: "Pending",
        },
        {
            id: 2,
            name: "Sara Ibrahim",
            email: "sara@yahoo.com",
            date: "2025-07-19",
            time: "02:00 PM",
            status: "Pending",
        },
    ]);

    const [showDonationModal, setShowDonationModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [donationAmount, setDonationAmount] = useState("");

    const handleAction = (id, action) => {
        setAppointments((prev) =>
            prev.map((a) =>
                a.id === id ? { ...a, status: action === "accept" ? "Accepted" : "Declined" } : a
            )
        );
    };

    const handleRegisterDonation = (appointment) => {
        setSelectedAppointment(appointment);
        setDonationAmount("");
        setShowDonationModal(true);
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();

        const donationAmt = Number(donationAmount);
        if (isNaN(donationAmt) || donationAmt < 0 || donationAmt > 2) {
            alert("Please enter a valid donation amount between 0 and 2.");
            return;
        }

        const donationStatus = donationAmt === 0 ? "Failed" : "Successful";

        const donationData = {
            name: selectedAppointment.name,
            email: selectedAppointment.email,
            date: selectedAppointment.date,
            amount: `${donationAmt} unit`,
            status: donationStatus,
        };

        const existing = JSON.parse(localStorage.getItem("donations") || "[]");
        localStorage.setItem("donations", JSON.stringify([...existing, donationData]));

        setAppointments((prev) =>
            prev.map((a) =>
                a.id === selectedAppointment.id
                    ? { ...a, status: donationStatus === "Failed" ? "Failed" : "Donated" }
                    : a
            )
        );

        setShowDonationModal(false);
    };

    const columns = [
        { header: "Name", accessor: "name" },
        { header: "Email", accessor: "email" },
        { header: "Date", accessor: "date" },
        { header: "Time", accessor: "time" },
        {
            header: "Status",
            accessor: "status",
            render: (row) => {
                if (row.status === "Donated") {
                    return <span className="text-success fw-semibold">Donated</span>;
                } else if (row.status === "Failed") {
                    return <span className="text-danger fw-semibold">Failed</span>;
                } else if (row.status === "Declined") {
                    return <span className="text-secondary">Declined</span>;
                }
                return row.status;
            },
        },
        {
            header: "Actions",
            accessor: "actions",
            render: (row) => {
                const appt = row;
                return (
                    <div className="d-flex justify-content-center flex-wrap gap-2">
                        {appt.status === "Pending" && (
                            <>
                                <button
                                    onClick={() => handleAction(appt.id, "accept")}
                                    className=" accept-btn "
                                >
                                    Accept
                                </button>
                                <button
                                    onClick={() => handleAction(appt.id, "decline")}
                                    className=" decline-btn "
                                >
                                    Decline
                                </button>
                            </>
                        )}
                        {appt.status === "Accepted" && (
                            <button
                                onClick={() => handleRegisterDonation(appt)}
                                className="register-btn"
                            >
                                Register
                            </button>
                        )}
                        {appt.status === "Donated" && (
                            <span className="text-success fw-semibold">Done</span>
                        )}
                        {appt.status === "Failed" && (
                            <span className="text-danger fw-semibold">Failed</span>
                        )}
                    </div>
                );
            },

        },
    ];

    return (
        <div className="container mt-4">
            <h2 className="title mb-4">Appointments</h2>
            <DataTable data={appointments} columns={columns} />

            {/* Modal styled like profile page */}
            {showDonationModal && (
                <>
                    <div className="custom-modal-backdrop"></div>
                    <div className="modal fade show d-block custom-modal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content p-4">
                                <div className="modal-header">
                                    <h5 className="modal-title">Register Donation</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowDonationModal(false)}
                                    ></button>
                                </div>
                                <form onSubmit={handleDonationSubmit}>
                                    <div className="modal-body">
                                        <TextInput
                                            label="Donor Name"
                                            value={selectedAppointment?.name}
                                            disabled
                                        />
                                        <TextInput
                                            label="Email"
                                            value={selectedAppointment?.email}
                                            disabled
                                        />
                                        <TextInput
                                            label="Appointment Date"
                                            value={selectedAppointment?.date}
                                            disabled
                                        />
                                        <TextInput
                                            label="Time"
                                            value={selectedAppointment?.time}
                                            disabled
                                        />
                                        <div className="mb-3">
                                            <label htmlFor="donationAmount" className="form-label fw-semibold">
                                                Donation Amount (in units)
                                            </label>
                                            <select
                                                id="donationAmount"
                                                className="form-select"
                                                value={donationAmount}
                                                onChange={(e) => setDonationAmount(e.target.value)}
                                                required
                                            >
                                                <option value="">Select amount</option>
                                                <option value="0">0 unit</option>
                                                <option value="1">1 unit</option>
                                                <option value="2">2 units</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="modal-footer d-flex justify-content-end gap-2">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() => setShowDonationModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button type="submit" className="operation-btn">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}