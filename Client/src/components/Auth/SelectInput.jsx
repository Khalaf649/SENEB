import React from "react";

const SelectInput = ({ label, options, value, onChange, placeholder, required }) => (
    <div className="input-field">
        <label>{label}{required && '*'}</label>
        <select value={value} onChange={onChange} required={required}>
            <option value="" disabled>{placeholder}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);
export default SelectInput;