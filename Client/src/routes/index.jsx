import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DonorProfile from "../pages/Profiles/DonorProfile";
import Admin from "../pages/Dashboard/Admin";
import SubAdmin from "../pages/Dashboard/SubAdmin";
import HealthFacility from "../pages/Dashboard/HealthFacility";
import ManageSubadmins from "../pages/Dashboard/ManageSubadmins";
import ManageBloodCenters from "../pages/Dashboard/ManageBloodCenters";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donorProfile" element={<DonorProfile />} />

        {/* Admin Dashboard with nested routes */}
        <Route path="/adminDashboard" element={<Admin />}>
          <Route path="manage-subadmins" element={<ManageSubadmins />} />
          <Route path="manage-blood-centers" element={<ManageBloodCenters />} />
        </Route>

        <Route path="/subAdminDashboard" element={<SubAdmin />} />
        <Route path="/healthFacilityDashboard" element={<HealthFacility />} />
      </Routes>
    </Router>
  );
}
