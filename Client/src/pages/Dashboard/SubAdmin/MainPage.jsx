import StatCard from "../../../components/Stat/StatCard";
import PieChartCard from "../../../components/Stat/PieChartCard";
import LineChartCard from "../../../components/Stat/LineChartCard";
import {
    FaDatabase,
    FaExclamationCircle,
    FaCalendarCheck,
} from "react-icons/fa";

const COLORS = ["#b30000", "#e60000", "#ff6666", "#990000", "#cc0000", "#ff9999"];

const stats = {
    bloodStock: 75,
    pendingAppointments: 18,
    donnations: 22,
};

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

export default function SubAdminDashboard() {
    return (
        <div className="container-fluid subadmin py-2">

            <div className="text mb-4">
                <h2 className="title">Sub Admin Dashboard</h2>
                <p className="sub-heading text-muted">Overview of center activity, stock, and donations</p>
            </div>

            {/* Stat Cards */}
            <div className="row mb-4">
                <StatCard title="Total Blood Stock" titleLink="/subAdminDashboard/bloodstock" value={stats.bloodStock} icon={<FaDatabase />} warning={stats.bloodStock < 10} />
                <StatCard title="Pending Appointments" value={stats.pendingAppointments} icon={<FaExclamationCircle />} />
                <StatCard title="Donations" titleLink="/subAdminDashboard/donations" value={stats.donations} icon={<FaCalendarCheck />} />
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
                        className="subadmin-chart"
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <LineChartCard
                        title="Monthly Donations"
                        data={donationTrendData}
                        xKey="month"
                        yKey="donations"
                        strokeColor="#7a2617"
                        className="subadmin-chart"
                    />
                </div>
            </div>
        </div>
    );
}