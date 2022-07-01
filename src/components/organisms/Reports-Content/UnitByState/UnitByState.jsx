import React from "react";
import UnitBody from '../../../molecules/Reports-Molecules/UnitBody/UnitBody'
import ReportHeader from "../../../molecules/ReportHeader/ReportHeader";
import "./UnitByState.scss";

const Unit = () => {
  return (
    <>
    <div className="container-state">
        <div className="header-state">
      <ReportHeader />
      </div>
      <div className="unit-state">
      <UnitBody />
      </div>
      </div>
    </>
  );
};
export default Unit;
