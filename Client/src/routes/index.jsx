import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DonorProfile from "../pages/Profiles/DonorProfile";

import Admin from "../pages/Dashboard/Admin/Admin";
import MainPage from "../pages/Dashboard/Admin/MainPage";
import SubAdmin from "../pages/Dashboard/SubAdmin/SubAdmin";
import HealthFacility from "../pages/Dashboard/HealthFacility/HealthFacility";
import ManageSubadmins from "../pages/Dashboard/Admin/ManageSubadmins";
import ManageBloodCenters from "../pages/Dashboard/Admin/ManageBloodCenters";


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
          <Route index element={<MainPage />} />
          <Route path="manage-subadmins" element={<ManageSubadmins />} />
          <Route path="manage-blood-centers" element={<ManageBloodCenters />} />
        </Route>

        <Route path="/subAdminDashboard" element={<SubAdmin />} />
        <Route path="/healthFacilityDashboard" element={<HealthFacility />} />
      </Routes>
    </Router>
  );
}
