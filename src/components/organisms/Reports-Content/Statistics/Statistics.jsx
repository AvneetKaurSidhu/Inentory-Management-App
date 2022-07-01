import React from "react";
import ChartBody from '../../../molecules/Reports-Molecules/ChartBody/ChartBody'
import ReportHeader from "../../../molecules/ReportHeader/ReportHeader";
import '../Statistics/Statistics.scss'
const Statistics = () => {
  return (
    <>
    <div className="container-stats">
      <div className="div-header-body">
      <div className="header-stats">
      <ReportHeader />
      </div>
      <div className="chart-body">
      <ChartBody />
      </div>
      </div>
      </div>
    </>
  );
};
export default Statistics;
