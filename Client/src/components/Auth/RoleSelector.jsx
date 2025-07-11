import React from "react";

const RoleSelector = ({onSelect}) => {
    const roles = [
        {label: 'Donor', value: 'donor'},
        {label: 'BTD Staff', value: 'admin'},
        {label: 'Health Facility Staff', value: 'hospital_staff'},
    ];

    return (
        <div className="button-group d-flex justify-content-between mt-3">
            {roles.map(role => (
                <button
                    key={role.label}
                    type="button"
                    className="role-btn btn btn-outline-secondary"
                    onClick={() => onSelect(role.value)}>
                        {role.label}
                    </button>
            ))}
        </div>
    );
};

export default RoleSelector;