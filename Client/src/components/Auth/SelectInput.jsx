import React from "react";

const SelectInput = ({ label, options, value, onChange, placeholder, required, disabled = false  }) => (
    <div className="input-field">
        <label>{label}{required && '*'}</label>
        <select value={value} onChange={onChange} required={required} disabled={disabled} className="form-control">
            <option value="" disabled>{placeholder}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);
export default SelectInput;