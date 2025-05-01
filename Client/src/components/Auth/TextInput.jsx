import React from "react";

const TextInput = ({ label, id, type = 'text', placeholder, value, onChange, required, isTextArea = false, disabled = false }) => {
    return (

    <div className="form-group">
        <label htmlFor={id}>{label}{required && '*'}</label>
        {isTextArea ? (
            <textarea
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className="form-control"
                style={{ resize: 'none' }}
            ></textarea>
        ) : (
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className="form-control"
            />
        )}
    </div>
    );
};

export default TextInput;