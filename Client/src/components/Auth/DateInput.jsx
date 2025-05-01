import React from "react";

const DateInput = ({ label, value, onChange, required }) => (
    <div className="input-field">
        <label>{label}{required && '*'}</label>
        <input 
            type="date" 
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
);

export default DateInput;