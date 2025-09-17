import "../../../styles/all.min.css";
import "../../../styles/style.css";
import "../../../styles/bootstrap.min.css";
import LoginLogoutButton from "../../../components/LoginLogoutButton";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Donor() {
  const [donor, setDonor] = useState({
    fullName: "Donor Name",
    profileImage: null,
  });

  useEffect(() => {
    const storedDonor = JSON.parse(localStorage.getItem("donor"));
    if (storedDonor) {
      setDonor(storedDonor);
    }
  }, []);

  return (
    <>
      <div className="d-flex admin-page">
        {/* Sidebar */}
        <div className="sidebar p-3">
          <div className="sidebar-logo d-flex flex-column align-items-center justify-content-center text-center">
            <img
              className="rounded-circle mb-2"
              src={donor.profileImage || "/temporary.jpeg"}
              alt="Donor"
              width="135"
              height="135"
            />
            <h5 className="fw-semibold mt-1">{donor.fullName}</h5>
          </div>
          <hr className="sidebar-divider" />

          <ul className="nav flex-column mt-4 mb-4">
            <div className="sidebar-section">
              <li className="text-uppercase small mb-2">My Account</li>

              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="profile">
                  <i className="fas fa-user me-2"></i> My Profile
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="donations">
                  <i className="fas fa-heartbeat me-2"></i> My Donations
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="appointments">
                  <i className="fas fa-calendar-alt me-2"></i> Book Appointment
                </Link>
              </li>
            </div>

            <hr className="sidebar-divider" />

            <div className="sidebar-section">
              <li className="text-uppercase small mb-2 mt-2">Explore</li>

              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="centers">
                  <i className="fas fa-hospital me-2"></i> Nearest Centers
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link sidebar-link" to="notifications">
                  <i className="fas fa-bell me-2"></i> Notifications
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
