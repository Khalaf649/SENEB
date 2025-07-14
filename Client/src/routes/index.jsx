import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DonorProfile from "../pages/Profiles/DonorProfile";

import Admin from "../pages/Dashboard/Admin/Admin";
import AdminMainPage from "../pages/Dashboard/Admin/MainPage";
import SubAdmin from "../pages/Dashboard/SubAdmin/SubAdmin";
import HealthFacility from "../pages/Dashboard/HealthFacility/HealthFacility";
import ManageSubadmins from "../pages/Dashboard/Admin/ManageSubadmins";
import ManageBloodCenters from "../pages/Dashboard/Admin/ManageBloodCenters";

import SubAdminMainPage from "../pages/Dashboard/SubAdmin/MainPage";
import Donnations from "../pages/Dashboard/SubAdmin/Donnations";
import Appointments from "../pages/Dashboard/SubAdmin/Appointments";
import ApproveRequests from "../pages/Dashboard/SubAdmin/ApproveRequests";
import SubAdminProfile from "../pages/Profiles/SubAdminProfile";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donorProfile" element={<DonorProfile />} />

        {/* Admin */}
        <Route path="/adminDashboard" element={<Admin />}>
          <Route index element={<AdminMainPage />} />
          <Route path="manage-subadmins" element={<ManageSubadmins />} />
          <Route path="manage-blood-centers" element={<ManageBloodCenters />} />
        </Route>

        {/* Sub Admin */}
        <Route path="/subAdminDashboard" element={<SubAdmin />}>
          <Route index element={<SubAdminMainPage/>} />
          <Route path="donnations" element={<Donnations />} />
          <Route path="appointments" element={<Appointments />} />       
          <Route path="profile" element={<SubAdminProfile />} />       
          <Route path="approve-requests" element={<ApproveRequests />} />
        </Route>

        <Route path="/healthFacilityDashboard" element={<HealthFacility />} />
      </Routes>
    </Router>
  );
}
