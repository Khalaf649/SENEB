import React, { useEffect, useState } from "react";

export default function DonorMainPage() {
  const donorName = "Amany Othman";
  const bloodType = "O+";
  const totalDonations = 5;
  const lastDonation = "2025-08-15"; // YYYY-MM-DD
  const donationGapDays = 90;

  const [countdown, setCountdown] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lastDate = new Date(lastDonation);
    const nextDate = new Date(lastDate);
    nextDate.setDate(nextDate.getDate() + donationGapDays);

    const updateCountdown = () => {
      const now = new Date();
      const diff = nextDate - now;

      if (diff <= 0) {
        setCountdown("You can donate now ✅");
        setProgress(100);
      } else {
        const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
        setCountdown(`${daysLeft} days left`);
        const daysPassed = donationGapDays - daysLeft;
        setProgress(Math.min((daysPassed / donationGapDays) * 100, 100));
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [lastDonation]);

  return (
    <div>
      {/* Welcome */}

      <h2>Welcome back, {donorName} </h2>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="donor-card shadow-sm text-center p-3">
            <h5>Total Donations</h5>
            <p className="display-6 fw-bold">{totalDonations}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="donor-card shadow-sm text-center p-3">
            <h5>Blood Type</h5>
            <p className="display-6 fw-bold">{bloodType}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="donor-card  shadow-sm text-center p-3">
            <h5>Last Donation</h5>
            <p className=" display-6 fw-bold">{lastDonation}</p>
          </div>
        </div>
      </div>

      {/* Countdown + Progress */}
      <div className="  donation-countdown-card shadow-sm p-4 text-center">
        <h5>Next Eligible Donation</h5>
        <p className="fw-bold fs-4 ">{countdown}</p>

        <div className="progress mt-3" style={{ height: "20px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
