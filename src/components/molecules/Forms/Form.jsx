import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SettingsForm.scss";
// import Content from '../../molecules/Content/Content'
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addUnit } from "../../../services/setting-form";
import {editUnit} from "../../../services/edit-settings-form"
// import Themes from "../Forms/variable";
import { AiOutlineUnorderedList, AiTwotoneDelete } from "react-icons/ai";
const SettingsForm = ({
    name,
  setName,
  sname,
  setSname,
  icon,
  setIcon,
  comments,
  setComments,
  propertyRow,
  setPropertyRow,
  partsRow,
  setPartsRow,
  APIData,
  addButton,
  setAPIData
}) => {
    let handleSubmit = async (e) => {
        e.preventDefault();
        const newUnit={
          name: name,
          sname: sname,
          icon: icon,
          properties: propertyRow,
          parts: partsRow,
          comments: comments,
                       }
        try {
          let res = await fetch("http://localhost:5000/units", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUnit),
          });
          let resJson = await res.json();
          setName("");
          setSname("");
          setIcon("");
          setPropertyRow([""]);
          setPartsRow([]);
          setComments("");
        } catch (err) {
          console.log(err);
        }
        setAPIData([...APIData,newUnit])
      };
    
      const AddPropertyRow = () => {
        const RowData1 = {
          label: "",
          defaultValue: "",
          name: false,
          required: false,
        };
        setPropertyRow([...propertyRow, RowData1]);
      };
    
      const AddPartsRow = () => {
        const RowData2 = {
          partName: "",
          name: false,
          required: false,
        };
        setPartsRow([...partsRow, RowData2]);
      };
    
      const deletePropertyRow = (index) => {
        const rows = [...propertyRow];
        rows.splice(index, 1);
        setPropertyRow(rows);
      };
    
      const deletePartsRow = (index) => {
        const rows = [...partsRow];
        rows.splice(index, 1);
        setPartsRow(rows);
      };
    
      const handleChangeProperty = (index, e) => {
        let { name, value } = e.target;
        const Input = [...propertyRow];
        Input[index][name] = value;
        setPropertyRow(Input);
      };
    
      const handleChangeParts = (index, e) => {
        let { name, value } = e.target;
        const Input = [...partsRow];
        Input[index][name] = value;
        setPartsRow(Input);
      };
    
      const handleCheckboxProperty = (index, e) => {
        let { name, value } = e.target;
        if (e.target.checked === true) {
          value = true;
        }
        if (e.target.checked === false) {
          value = false;
        }
        const Input = [...propertyRow];
        Input[index][name] = value;
        setPropertyRow(Input);
      };
    
      const handleCheckboxParts = (index, e) => {
        let { name, value } = e.target;
        if (e.target.checked === true) {
          value = true;
        }
        if (e.target.checked === false) {
          value = false;
        }
        const Input = [...partsRow];
        Input[index][name] = value;
        setPartsRow(Input);
      };
    

    return (
        <>
            <Form
                className="mx-4 my-2 form"
                autoComplete="off"
                onSubmit={handleSubmit}>
                {/* onSubmit={handleSubmit(newMeeting)} */}
                <div className="btns">
                    <button type="submit" className=" my-2 button btn1">
                        Save
                    </button>
                    <button type="button" className="mx-2 my-2 button btn2" >Archive</button>
                    <button type="button" className="mx-1 my-2 button btn2 add-new" onClick={addButton}>Add Unit</button>
                </div>
                <div className="border-btn"></div>
                <div >
                <Form.Group className="mb-3 my-2 mx-1" controlId="name">
                    <Form.Label className="label">
                        Name<span className="required">&nbsp;*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        className="my-1"
                        name="name"
                        value={name}
            onChange={(e) => setName(e.target.value)}
                    />
                    {/* name="formBasicName" */}
                </Form.Group>

                <Form.Group className="mb-3 mx-1" controlId="shortName">
                    <Form.Label className="label">Short Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Short Name"
                        name="sname"
                        className="my-1"
                        value={sname}
            onChange={(e) => setSname(e.target.value)}
                    />
                    {/* name="formBasicShortName" */}
                </Form.Group>

                <Form.Group className="mb-3 mx-1" controlId="icon.image">
                    <Form.Label className="label">Icons</Form.Label>
                    {/* <div><img src="..\..\static\images\camera-solid.svg" alt="camera"/></div> */}
                    <Form.Select
                        aria-label="Default select example"
                        className="my-1"
                        value={icon}
            onChange={(e) => setIcon(e.target.value)}>
                        <option value="../../static/images/microchip-solid.svg">Microchip</option>
                        <option value="../../static/images/camera-solid.svg">Camera</option>
                        <option value="../../static/images/desktop-solid.svg">Desktop</option>
                        <option value="../../static/images/hard-drive-solid.svg">Hard Drive</option>
                        <option value="../../static/images/keyboard-solid.svg">Keyboard</option>
                        <option value="../../static/images/laptop-solid.svg">Laptop</option>
                        <option value="../../static/images/memory-solid.svg">Memory</option>
                        <option  value="../../static/images/mobile-solid.svg">Mobile</option>
                        <option value="../../static/images/sd-card-solid.svg">Sd Card</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group
                    className="mb-3 mx-1"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label my-1 mx-1">
                        Properties
                    </Form.Label>
                    <Table hover>
                        <thead className="tborder">
                            <tr>
                                <th>Label</th>
                                <th>Default</th>
                                <th>Name</th>
                                <th>Required</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {propertyRow.map((input, index) => {
                const { label, defaultValue, name, required } = input;
                            return (
                                <tr key={index}>
                                    <td className="mx-3">
                                        <input
                                            type="text"
                                            className="label-text input"
                                            name="label"
                        value={label}
                        onChange={(e) => handleChangeProperty(index, e)}></input>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="default-text input"
                                            name="defaultValue"
                        value={defaultValue}
                        onChange={(e) => handleChangeProperty(index, e)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Check
                                            type="checkbox"
                                            className="mx-3 checkbox"
                                            name="name"
                        checked={name}
                        onChange={(e) => handleCheckboxProperty(index, e)}
                                        />
                                        {/* <input type="checkbox" className="mx-1 checkbox" /> */}
                                    </td>
                                    <td>
                                        <Form.Check
                                            type="checkbox"
                                            className="mx-4 checkbox"
                                            name="required"
                        checked={required}
                        onChange={(e) => handleCheckboxProperty(index, e)}
                                        />
                                        {/* <input type="checkbox" className="mx-1 checkbox" /> */}
                                    </td>
                                    <td>
                                        <AiTwotoneDelete
                                            className="delete-icon"
                                            onClick={() => deletePropertyRow(index)}
                                        />
                                    </td>
                                </tr>
                            )
})}
                        </tbody>
                    </Table>
                    <div className="add mx-2 my-1" onClick={AddPropertyRow}>
                        Add property
                    </div>
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label my-1 mx-1">Parts</Form.Label>
                    <Table hover>
                        <thead className="tborder">
                            <tr>
                                <th className="mx-1">Part name</th>
                                <th></th>
                                <th className="mx-1 px-1">Name</th>
                                <th className="mx-1 px-3">Default</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                        {partsRow.map((input, index) => {
                const { partName, name, required } = input; 
                return(
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="text"
                                            className="part-name-text input"
                                            name="partName"
                                            value={partName}
                                            onChange={(e) => handleChangeParts(index, e)}></input>
                                    </td>
                                    <td></td>
                                    <td>
                                        {/* <input
                                            type="text"
                                            className="part-name-text input"></input> */}
                                        <Form.Check
                                            type="checkbox"
                                            className="mx-1 checkbox"
                                            name="name"
                        checked={name}
                        onChange={(e) => handleCheckboxParts(index, e)}
                                        />
                                    </td>
                                    <td>
                                    <Form.Check
                                            type="checkbox"
                                            className="mx-1 checkbox"
                                            name="required"
                        checked={required}
                        onChange={(e) => handleCheckboxParts(index, e)}
                                        />
                                    </td>
                                    <td>
                                        <AiTwotoneDelete
                                            onClick={() => deletePartsRow(index)}
                                        />
                                    </td>
                                </tr>
                )
                                        })}
                        </tbody>
                    </Table>
                    <div className="add mx-2 my-1"onClick={AddPartsRow}>
                        Add part
                    </div>
                </Form.Group>

                <Form.Group
                    className="mb-3 mx-1 $`{}`"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label my-1">Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </Form.Group>
                </div>
            </Form>
        </>
    );
};
export default SettingsForm;
