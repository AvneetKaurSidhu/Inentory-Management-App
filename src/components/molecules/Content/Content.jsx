import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Content.scss";
// import Button from "../../atoms/ButtonCategory/Button";
//import useProducts from "../../../utils/useProducts";


export default function Content({
    heading,
    id,
   onClick
}) {


    return (
        
      <div className="unit-name container-unit-name" onClick={onClick}>
      {heading}
    </div>
            
    );

}
