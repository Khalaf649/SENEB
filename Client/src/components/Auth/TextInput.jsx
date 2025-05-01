import React from "react";

const TextInput = ({ label, id, type = 'text', placeholder, value, onChange, required }) => (
    <div className="form-group">
        <label htmlFor={id}>{label}{required && '*'}</label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className="form-control"
        />
    </div>
);

export default TextInput;