import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const DropDown = ({ labelName,className,  items , method}) => {
    return <div className='form-group'>
        <label >{labelName}</label>
        <select onChange ={method} className={className}>
            {
                items.map((item, index) => {
                    return <option key={index}>{item}</option>
                })
            }
        </select>
    </div>
}
export default DropDown;