import React, { useEffect, useState } from "react";
import "./UnitBody.scss";
import ButtonStats from "../../../atoms/Button-Stats/Button-Stats";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
const UnitBody = () => {

  const [unitsData, setUnitsData] = useState([]);

  async function UnitsData() {
    try {
      const response = await fetch("http://localhost:5005/units");
      const unitsData1 = await response.json();
      setUnitsData(unitsData1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    UnitsData();
  }, []);

  const handleleftarrow = () => {
    return (
      console.log("Heelo")
    )
  }

  const handlerightarrow = () => {
    return (
      console.log("Hi")
    )
  }
  return (
    <>
      <div className="unitbody">
        <div className="unitbody__dd">
          <ButtonStats className="btn unitbody__leftarrow" onClick={handleleftarrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </ButtonStats>
          <div className="unitbody__datepicker">
            <ButtonStats type="button" className="btn unitbody__btn">
              <span>06/01/2021 - 06/01/2022</span>
              <InsertInvitationIcon
                className="unitbody__calendaricon"
                fontSize="small"
              ></InsertInvitationIcon>
            </ButtonStats>
          </div>
          <ButtonStats
            className="btn unitbody__rightarrow"
            onClick={handlerightarrow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </ButtonStats>
        </div>

        <div className="unitbody__month">
          <select
            className="unitbody__month-select"
            aria-labelledby="dropdownMenuButton"
          >
            <option className="dropdown-element border-top boder-bottom">
              Custom
            </option>
            <option className="dropdown-element border-top boder-bottom">
              Month
            </option>
            <option className="dropdown-element border-top boder-bottom">
              Year
            </option>
            <option className="dropdown-element border-top boder-bottom">
              12 months
            </option>
          </select>
        </div>

        <div className="unitbody__condition ">
          <select
            className="unitbody__condition-select"
            aria-labelledby="dropdownMenuButton"
          >
            <option className="dropdown-element border-top boder-bottom">
              Added
            </option>
            <option className="dropdown-element border-top boder-bottom">
              Deprecated
            </option>
            <option className="dropdown-element border-top boder-bottom">
              Broken
            </option>
          </select>
        </div>

        <div className="unitbody__units">
          <select
            className="unitbody__units-select"
            aria-labelledby="dropdownMenuButton"
          >
            <option disabled selected hidden>
              All units
            </option>
            <option className="dropdown-element border-top boder-bottom">
              Hard Disk
            </option>
            <option className="dropdown-element border-top boder-bottom">
              Memory
            </option>
            <option className="dropdown-element border-top boder-bottom">
              Monitor
            </option>
            <option className="dropdown-element border-top boder-bottom">
              Processor
            </option>
            <option className="dropdown-element border-top boder-bottom">
              Computer
            </option>
          </select>
        </div>
      </div>

      <strong className="unitbody__text">All units</strong>: {unitsData.length}

      <table class="table table-hover unitbodytable">
        <thead className="unitbodytable__thead">
          <tr>
            <th scope="col" className="unitbodytable__thead-th" id='tablestatus'>Status</th>
            <th scope="col" className="unitbodytable__thead-th">Serial</th>
            <th scope="col" className="unitbodytable__thead-th">Type</th>
            <th scope="col" className="unitbodytable__thead-th">Name</th>
            <th scope="col" className="unitbodytable__thead-th">Assigned to</th>
            <th scope="col" className="unitbodytable__thead-th">From</th>
          </tr>
        </thead>
        <tbody className="unitbodytable__tbody">
          {unitsData.map((item, i) => (
            <tr key={i}>
              <th scope="row">
                {/* <i className="unitbodytable__tbody-wrenchicon">
                  <BuildOutlinedIcon fontSize="small" />
                </i> */}
                <span className={"unitbodytable__tbody-bg" + item.status + " badge rounded-pill mx-4"}>
                  {item.status}
                </span>
              </th>
              <td>{item.serial}</td>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.assignedTo}</td>
              <td>{item.from}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UnitBody;
