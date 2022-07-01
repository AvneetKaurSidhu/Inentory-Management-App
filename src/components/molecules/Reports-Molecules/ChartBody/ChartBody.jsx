import React from "react";
import Image from '../../../atoms/Image/Image'
import '../ChartBody/ChartBody.scss';
import ButtonStats from "../../../atoms/Button-Stats/Button-Stats";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

const ChartBody = () => {

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
      <div className="chartbody">
        <div className="chartbody__dd">
          <ButtonStats className="btn chartbody__leftarrow" onClick={handleleftarrow}>
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
          <div className="chartbody__datepicker">
            <ButtonStats type="button" className="btn chartbody__btn">
              <span>06/01/2021 - 06/01/2022</span>
              <InsertInvitationIcon
                className="chartbody__calendaricon"
                fontSize="small"
              ></InsertInvitationIcon>
            </ButtonStats>
          </div>
          <ButtonStats
            className="btn chartbody__rightarrow"
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
        <div className="chartbody__month chartbody__dd">
          <select
            className="chartbody__month-select"
            aria-labelledby="dropdownMenuButton"
          >
            <option className="dropdown-item border-top boder-bottom">
              Year
            </option>
            <option className="dropdown-item border-top boder-bottom">
              12 months
            </option>
          </select>
        </div>
        <div className="chartbody__units chartbody__dd">
          <select
            className="chartbody__units-select"
            aria-labelledby="dropdownMenuButton"
          >
            <option className="dropdown-item border-top boder-bottom">
              Computer
            </option>
            <option className="dropdown-item border-top boder-bottom">
              Hard Disk
            </option>
            <option className="dropdown-item border-top boder-bottom">
              Memory
            </option>
            <option className="dropdown-item border-top boder-bottom">
              Monitor
            </option>
            <option className="dropdown-item border-top boder-bottom">
              Processor
            </option>
          </select>
        </div>
      </div>
      <div className="chartbody__chart chart-alt">
        {/* <Image src={month} className="chartbody__img" /> */}
        Insert Chart Here
      </div>
    </>
  );
};
export default ChartBody;