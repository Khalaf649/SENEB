import React from "react";
import StatCard from "../../../components/Stat/StatCard";
import PieChartCard from "../../../components/Stat/PieChartCard";
import LineChartCard from "../../../components/Stat/LineChartCard";
import {
    FaDatabase,
    FaUsers,
    FaUserShield,
    FaExclamationCircle,
    FaHandHoldingMedical,
    FaCalendarCheck,
    FaHospital,
} from "react-icons/fa";

const COLORS = ["#b30000", "#e60000", "#ff6666", "#990000", "#cc0000", "#ff9999"];


const bloodTypeData = [
    { name: "A+", value: 400 },
    { name: "O+", value: 300 },
    { name: "B+", value: 300 },
    { name: "AB+", value: 200 },
    { name: "O-", value: 100 },
    { name: "A-", value: 50 },
];

const donationTrendData = [
    { month: "Jan", donations: 120 },
    { month: "Feb", donations: 150 },
    { month: "Mar", donations: 90 },
    { month: "Apr", donations: 180 },
    { month: "May", donations: 200 },
    { month: "Jun", donations: 170 },
];

export default function AdminDashboard() {
    return (
        <div className="container-fluid">
            <h2 className="mb-4">Admin Dashboard Overview</h2>

            {/* Stat Cards */}
            <div className="row mb-4">
                <StatCard title="Total Blood Units" value={30} icon={<FaDatabase />} />
                <StatCard title="Registered Donors" value={430} icon={<FaUsers />} />
                <StatCard title="Blood Centers" value={12} icon={<FaHospital />} />
                <StatCard title="Pending Requests" value={19} icon={<FaExclamationCircle />} />
                <StatCard title="Donations This Month" value={186} icon={<FaHandHoldingMedical />} />
                <StatCard title="Appointments Today" value={14} icon={<FaCalendarCheck />} />
            </div>

            {/* Charts */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <PieChartCard
                        title="Blood Type Distribution"
                        data={bloodTypeData}
                        dataKey="value"
                        nameKey="name"
                        colors={COLORS}
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <LineChartCard
                        title="Monthly Donations"
                        data={donationTrendData}
                        xKey="month"
                        yKey="donations"
                        strokeColor="#7a2617"
                    />
                </div>
            </div>
        </div>
    );
}