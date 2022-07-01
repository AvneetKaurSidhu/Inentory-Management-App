import React from 'react';
import fetchUrls from '../../../config/config.json';
import useFetch from '../../../config/useFetch';
import './Dropdown.scss';
import { useState } from 'react';
import Popup from '../SideBar-Persons/Popup';

const Dropdown = () => {


    const dropdownnameList = useFetch(fetchUrls.personsApi, "GET");
    const [isOpen, setIsOpen] = useState(false);

    let categories = null;
    if (dropdownnameList.apiData !== null) {
        const personData = dropdownnameList.apiData;

        categories = personData.map((option) => {
            return (

                <option className="Content" key={option.id} value={option.id}>{option.personname},&nbsp;&nbsp;{option.email}</option>
            )
        })
    }
    const handleCategory = (event) => {
        const id = event.target.value;
        setIsOpen(!isOpen);
        if (id === 'default') {

        }

    }
    return (
        <>
            <select className="dropdown-person" onChange={handleCategory}>
                <option value="default">Persons</option>
                {categories}
            </select>
            {isOpen && <Popup
                content={<>

                </>}

                handleClose={handleCategory}
            />}
        </>

    )

}

export default Dropdown

