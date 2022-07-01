import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from 'semantic-ui-react'
import Section from "../Section/Section-Content"
export default function DisplayUnitList() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:5000/units`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <div>
            <Input icon='search'
                placeholder='Search'
                onChange={(e) => searchItems(e.target.value)}
            />
            <div>
                {searchInput.length > 1 ? (
                    filteredResults.map((unitsInfo) => {
                        return (
                            <Section
                key={unitsInfo.id}
                id={unitsInfo.id}
                url={unitsInfo.icon}
                heading={unitsInfo.name}
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