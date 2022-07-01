import React from "react";

const ButtonStats = ({ className, onClick, children, disabled, type }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
export default ButtonStats;