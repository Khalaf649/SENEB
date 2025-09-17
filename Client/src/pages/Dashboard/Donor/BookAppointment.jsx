import { useState } from "react";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    center: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2 className="mb-4">Book an Appointment</h2>

      {submitted ? (
        <div className="alert alert-success">
          ✅ Your appointment has been booked successfully!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-4 shadow-sm rounded bg-light"
        >
          <div className="mb-3">
            <label htmlFor="date" className="form-label fw-bold">
              Choose Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="form-label fw-bold">
              Choose Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-control"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="center" className="form-label fw-bold">
              Select Center
            </label>
            <select
              id="center"
              name="center"
              className="form-select"
              value={formData.center}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Center --</option>
              <option value="Cairo Blood Center">Cairo Blood Center</option>
              <option value="Alexandria Blood Bank">
                Alexandria Blood Bank
              </option>
              <option value="Giza Blood Facility">Giza Blood Center</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-danger w-100 donor-appointment-btn"
          >
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
}
