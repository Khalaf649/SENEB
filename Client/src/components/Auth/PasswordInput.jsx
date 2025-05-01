import React, { useState } from "react";

const PasswordInput = ({ label, id, placeholder, value, onChange, required, disabled = false  }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}{required && '*'}</label>
            <div className="password-wrapper position-relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    className="form-control"
                />
                <i
                    className={`ri-${showPassword ? 'eye-line' : 'eye-off-line'} toggle-password`}
                    onClick={() => setShowPassword(prev => !prev)}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'
                    }}
                ></i>
            </div>
        </div>
    );
};

export default PasswordInput;
