import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Input } from 'semantic-ui-react'
import * as FaIcons from 'react-icons/fa';
import { useForm } from "react-hook-form";
import Section from "../Section/Section-Content"
import './Unit-List.scss'
export default function DisplayUnitList({
    setName,
  setSname,
  setIcon,
  setComments,
  setPropertyRow,
  setPartsRow,
  addButton,
  APIData,
  setAPIData
}) {
    
    const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:5000/units`).then((response) => {
      setAPIData(response.data);
    });
  }, []);
  const setForm = (unit) => {
    console.log("unit data", unit);
    setName(unit.name);
    setSname(unit.sname);
    setIcon(unit.icon);
    setComments(unit.comments);
    setPropertyRow(unit.properties);
    setPartsRow(unit.parts);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

    return (
        <div>
            <div className='search-container'>
            {/* <Input icon='search'
                placeholder='Search'
                onChange={(e) => searchItems(e.target.value)}
                className="searchbar"
            /> */}
            <input type="text" placeholder='Search...' className='searchbar' onChange={(e) => searchItems(e.target.value)} />
            <FaIcons.FaSearch className='search-icon'/>
            <button className='add-btn' onClick={addButton}>+</button>
            </div>
            {/* <button className='add-btn' onClick={() => addNewUnit()}>+</button> */}
            
            <div>
                {searchInput.length > 1 ? (
                    filteredResults.map((unitsInfo) => {
                        return (
                            <Section
                key={unitsInfo.id}
                id={unitsInfo.id}
                url={unitsInfo.icon}
                heading={unitsInfo.name}
                onClick={() => setForm(unitsInfo)}
                // button="+"
                // text={categoriesInfo.description}
                // button={categoriesInfo.name}
                // order={categoriesInfo.order}
                // to={`/products/?categoryId=${categoriesInfo.id}`}
            />
                        )
                    })
                ) : (
                    APIData.map((unitsInfo) => {
                        return (
                            <Section
                key={unitsInfo.id}
                id={unitsInfo.id}
                url={unitsInfo.icon}
                heading={unitsInfo.name}
                onClick={() => setForm(unitsInfo)}
                // text={categoriesInfo.description}
                // button={categoriesInfo.name}
                // order={categoriesInfo.order}
                // to={`/products/?categoryId=${categoriesInfo.id}`}
                />
                        )
                    })
                )}
            </div>
        </div>
    )
}
