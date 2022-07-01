import React from "react";
import "./ReportHeader.scss";
import { NavLink } from "react-router-dom";


const ReportHeader = () => {
    return (
        <div className="list-group list-group-horizontal reportheader">
            <NavLink
                to="/statistics"
                className="list-group-item-action reportheader__btn text-center w-25 text-primary border-top border-bottom pt-0.5 text-decoration-none py-1"
            >
                Statistics
            </NavLink>
            <NavLink
                to="/units"
                className="list-group-item-action reportheader__btn text-center w-25 text-primary border-top border-bottom pt-0.5 text-decoration-none py-1"
            >
                Units by state
            </NavLink>
            <NavLink
                to="/integrity"
                className="list-group-item-action reportheader__btn text-center w-25 text-primary border-top border-bottom pt-0.5 text-decoration-none py-1"
            >
                Integrity
            </NavLink>
            <NavLink
                to="/topusers"
                className="list-group-item-action reportheader__btn text-center w-25 text-primary border-top border-bottom pt-0.5 text-decoration-none py-1"
            >
                Top users
            </NavLink>
        </div>
    );
};
export default ReportHeader;
