import React from "react";
import IntegrityBody from '../../../molecules/Reports-Molecules/IntegrityBody/IntegrityBody'
import ReportHeader from "../../../molecules/ReportHeader/ReportHeader";
import "./Integrity.scss";
const Integrity = () => {
  return (
    <>
      <div className="container-integrity">
        <div className="header-integrity">
      <ReportHeader />
      </div>
      <div className="integrity-body">
      <IntegrityBody />
      </div>
      </div>
    </>
  );
};
export default Integrity;
