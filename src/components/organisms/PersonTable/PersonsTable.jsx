import React from 'react';
import './PersonsTable.scss';
const PersonTable = ({ product }) => {

  return (

    <>
      <tr className="table-row">
        <td >{product.type}</td>
        <td >{product.serial}</td>
        <td >{product.name}</td>
        <td>{product.from}</td>
      </tr>
    </>

  )

}


export default PersonTable;
