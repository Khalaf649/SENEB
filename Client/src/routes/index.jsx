import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DonorProfile from "../pages/Profiles/DonorProfile";
import Admin from "../pages/Dashboard/Admin";
import Donor from "../pages/Dashboard/Donor";
import HealthFacility from "../pages/Dashboard/HealthFaccility";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donorProfile" element={<DonorProfile />} />
        <Route path="/adminDashboard" element={<Admin/>} />
        <Route path="/donorDashboard" element={<Donor/>} />
        <Route path="/healthFacilityDashboard" element={<HealthFacility/>} />
      </Routes>
    </Router>
  );
}