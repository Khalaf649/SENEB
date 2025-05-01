import React from "react";

const DateInput = ({ label, value, onChange, required, disabled = false  }) => (
    <div className="input-field">
        <label>{label}{required && '*'}</label>
        <input 
            type="date" 
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
        />
    </div>
);

export default DateInput;