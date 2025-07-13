import "../../../styles/all.min.css";
import "../../../styles/style.css";
import "../../../styles/bootstrap.min.css";
import LoginLogoutButton from "../../../components/LoginLogoutButton";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../../assets/images/sidebar-logo.png";
export default function Admin() {
  

  return (
    <>
      <div className="d-flex admin-page">
        {/* Sidebar */}
        <div className="sidebar p-3">
          <div className="sidebar-logo d-flex align-items-center justify-content-center">
            <Link
              to=""
              className="d-flex align-items-center text-decoration-none"
            >
              <img className="logo" src={Logo} alt="Logo" width="50" />
              <h4 className="fx-semibold text-center mt-2 ms-2">Dashboard</h4>
            </Link>
          </div>
          <hr className="sidebar-divider" />
          <ul className="nav flex-column mt-4 mb-4">
            <div className="sidebar-section">
              <li className="text-uppercase small mb-2">User & Staff Management</li>

              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="manage-subadmins">
                  <i className="fas fa-user-shield me-2"></i> Manage Subadmins
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link sidebar-link"
                  to="manage-blood-centers"
                >
                  <i className="fas fa-hospital me-2"></i> Manage Blood Centers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link sidebar-link"
                  to="manage-health-staff"
                >
                  <i className="fas fa-user-md me-2"></i> Manage Health Facility
                  Staff
                </Link>
              </li>
            </div>
            <hr className="sidebar-divider" />

            <div className="sidebar-section ">
              <li className="text-uppercase small mb-2 mt-2">Operations</li>

              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="view-donations">
                  <i className="fas fa-hand-holding-medical me-2"></i> View
                  Donations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="approve-requests">
                  <i className="fas fa-check-circle me-2"></i> Approve Requests
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="center-data">
                  <i className="fas fa-database me-2"></i> Center Data / Blood
                  Stock
                </Link>
              </li>
            </div>
            <hr className="sidebar-divider" />
            <div className="sidebar-section">
              <li className="text-uppercase small mb-2 mt-2">Other</li>

              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="profile">
                  <i className="fas fa-user me-2"></i> My Profile
                </Link>
              </li>
            </div>
          </ul>

          <div className="sidebar-logout">
            <LoginLogoutButton />
          </div>
        </div>

        {/* Main content */}

        <div className="flex-grow-1 main-content-wrapper p-4">
          <div className="main-content-inner p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
