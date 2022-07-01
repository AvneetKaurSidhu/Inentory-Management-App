import React from "react";
import "./IntegrityBody.scss";

const IntegrityBody = () => {
  return (
    <div className="integritybody">
      <div className="integritybody__layout">
        <span class="integritybody__info">
          Lost units (assigned to fired users) : 
        </span>
        <span className="integrity-quantity">
        None
        </span>
      </div>
      <div className="integritybody__layout">
        <span class="integritybody__info">
          Broken or deprecated units, assigned to someone : 
        </span>
        <span className="integrity-quantity">
        None
        </span>
      </div>
      <div className="integritybody__layout">
        <span class="integritybody__info">
          Units and their parts that belong to different users : 
        </span>
        <span className="integrity-quantity">
        None
        </span>
      </div>
      <div className="integritybody__layout">
        <span class="integritybody__info">
          Archived unit types as parts of other unit types :
        </span>
        <span className="integrity-quantity">
        None
        </span>
      </div>
      <div className="integritybody__layout">
        <span class="integritybody__info">
          Archived unit types that are still in store : 
        </span>
        <span className="integrity-quantity">
        None
        </span>
      </div>
    </div>
  );
};
export default IntegrityBody;
