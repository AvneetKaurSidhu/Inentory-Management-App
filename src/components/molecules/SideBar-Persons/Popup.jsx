
import React from "react";
import './Popup.scss';

const Popup = props => {
  const type = localStorage.getItem("type");
  const skype = localStorage.getItem("personname");
  const itemstatus = localStorage.getItem("status");
  const itemAssigned = localStorage.getItem("Assigned to");
  const itemmodel = localStorage.getItem("model");
  const itemsize = localStorage.getItem("size");
  const itemtaken = localStorage.getItem("taken");
  const itemavailable = localStorage.getItem("available");

  return (
    <div className="popupBox">
      <div className="box">

        <div className="popupboxHeading">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <span className="itemType">{type}</span>

        </div>

        <div className="popup" >
          <div>
            <span className="popupitemDetails">Status</span> <span className="typeInfo blue">{itemstatus}</span>
          </div>
          <div>
            <span className="popupitemDetails">Assigned to </span><span className="typeInfo blue">{itemAssigned}</span>
          </div>
          <div>
            <span className="popupitemDetails">Model: </span><span className="typeInfo ">{itemmodel}</span>
          </div>
          <div>
            <span className="popupitemDetails">Size,inch:</span> <span className="typeInfo">{itemsize}</span>
          </div>
          <div className="logs">
            <span className="popupitemDetails">Logs</span> <span className="typeInfo"></span>
          </div>
          <div>
            <span className="dateInfo blue">Taken</span>&nbsp;&nbsp;<span className="dateInfo ">{itemtaken}</span>
          </div>

          <span className="dateInfo blue">Available</span>&nbsp;&nbsp;<span className="dateInfo ">{itemavailable}</span>
          <div className="link">Show detailed logs</div>

        </div>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;