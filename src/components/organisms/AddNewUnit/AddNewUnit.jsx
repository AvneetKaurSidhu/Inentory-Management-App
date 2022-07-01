import React, { useRef, useState } from "react";
import {Button,Popup,DropDown,validateUnitInput,InputField} from "../../atoms";
import AddIcon from '@mui/icons-material/Add';
import  "./AddNewUnit.scss";

const AddNewUnit = () => {
  const modelValue = useRef(null);
  const vendorValue = useRef(null);
  const [errorMessageM, setMessageM] = useState(" ");
  const [errorMessageV, setMessageV] = useState(" ");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [tag, setTag] = useState("");
  const [note, setNote] = useState("");

  const validateOnSubmit=(e)=>{
    e.preventDefault();
    modelValue==="" && validateUnitInput(modelValue);
  }

  return (
    <>
   
      <Button buttonType='unit__flex-item mt-2 bt'
      type="btn"
          method={(evt) => {
            evt.preventDefault();
            setIsPopupOpen(true);
          }}
        >
          <AddIcon />
      </Button>
     
      {isPopupOpen &&  <form onSubmit={validateOnSubmit}>
        <Popup onClose={()=>setIsPopupOpen(false)}>
        
        <div className="d-flex flex-row justify-content-between">
       
        <span className="popup-text1">Add a new unit</span>
        <div>
            <Button 
            buttonType="btn-cancel"
              type="button"
              method={(evt) => {
                evt.preventDefault();
                setIsPopupOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
            buttonType="btn-save"
              type="submit"
              disabled={(errorMessageM === "" && errorMessageV==="")? false : true}
            >
              Save
            </Button>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row justify-content-between">
          <DropDown className="unit-dropdown" labelName="" items={["Chassis", "Hard Disk 1","Memory","1111111"]} />
          <DropDown className="unit-dropdown"  labelName="Quantity" items={["1", "2","3","4","5","6","7","8"]} />
          </div>
          <InputField
            className="form-control"
            ref={modelValue}
            type="text"
            label={<div className="popup-text">Model<span className="required">*</span></div>}
            required
            onBlur={() => setMessageM(validateUnitInput(modelValue.current.value))}
          />
          <span className="required">{errorMessageM}</span>
          <InputField
            className="form-control"
            ref={vendorValue}
            type="text"
            label={<div className="popup-text">Vendor<span className="required">*</span></div>}
            required
            onBlur={() => setMessageV(validateUnitInput(vendorValue.current.value))}
          />
          <span className="required">{errorMessageV}</span>
          <InputField
            className="form-control"
            type="text"
            value={tag}
            label={<div className="popup-text">Tags</div>}
          />
          <label className="mt-3 popup-text" htmlFor="Notes">Notes</label>
          <textarea value={note} rows="4" cols="47">
           
          </textarea>
      </Popup>
         
        </form>}
    </>
  );
};

export default AddNewUnit;
