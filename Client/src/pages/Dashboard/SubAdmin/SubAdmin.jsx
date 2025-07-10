import "../../../styles/all.min.css";
import "../../../styles/style.css";
import "../../../styles/bootstrap.min.css";
import LoginLogoutButton from "../../../components/LoginLogoutButton";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../../assets/images/sidebar-logo.png";
import Navbar from "../../../components/NavigationBar";

export default function SubAdmin() {
    return (
        <>
        <Navbar/>
        {/* Main Content */}
            <div className="container-fluid mt-4 px-4">
                <Outlet />
            </div>
        </>
    );
}
