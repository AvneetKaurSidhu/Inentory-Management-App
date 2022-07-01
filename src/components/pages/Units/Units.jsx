import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import CachedSharpIcon from '@mui/icons-material/CachedSharp'
import AddNewUnit  from '../../organisms/AddNewUnit/AddNewUnit'
import React, { useEffect, useState } from 'react'
import './Units.scss'
import {InputField,Button,Pagination} from '../../atoms'
import { UnitsEntries } from '../../molecules/unitsEntries'

const Units = () => {
  const [units, setUnits] = useState([])
  const [unitsFilter, setUnitsFilter] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 12

  async function loadUnitsData () {
    try {
      const response = await fetch('http://localhost:5003/units')
      const unitsResponse = await response.json()
      setUnits(unitsResponse)
      setUnitsFilter(unitsResponse)
    } catch (error) {
      console.log(error)
    }
  }

  const [query, setQuery] = useState('')
  const searchUnits = value => {
    const filterdArray = units.filter(b => {
      return (
        b.status.toLowerCase().includes(value.toLowerCase()) ||
        b.serial.toLowerCase().includes(value.toLowerCase()) ||
        b.type.toLowerCase().includes(value.toLowerCase()) ||
        b.name.toLowerCase().includes(value.toLowerCase()) ||
        b.assignedTo.toLowerCase().includes(value.toLowerCase()) ||
        b.from.toLowerCase().includes(value.toLowerCase())
      )
    })
    setUnitsFilter(filterdArray)
  }

  useEffect(() => {
    loadUnitsData()
  }, [])
  const submitUnit = async () => {
    const myData = {
      id: 22,
      status: 'Deprecated',
      serial: 'PC-00006',
      type: '1111111',
      name: 'Dell X2',
      assignedTo: '',
      from: '12 March 2015'
    }

    const result = await fetch('http://localhost:3000/units', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData)
    })

    const resultInJson = await result.json()
    setUnits(prev => [...prev, resultInJson])
    setUnitsFilter(prev => [...prev, resultInJson])
  }
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = unitsFilter.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div className='unit'>
      <div
        className='table-responsive{-sm|-md|-lg|-xl}
        shadow pr-4 pl-4 pt-4'
      >
        <div>
          <div className='unit__component d-flex flex-row justify-content-between '>
            <div className='mt-2 ml-6 unit__flex-item heading pt-1'>All units</div>
            <div className='unit__flex-item'>
              <InputField
                type='text'
                className='form-control unit__searchbar'
                placeholder='Search'
                value={query}
                onChange={e => {
                  setQuery(e.target.value)
                  searchUnits(e.target.value)
                }}
              />
            </div>
            <div className='unit__icons d-flex flex-row unit__flex-icons'>
              <Button buttonType='unit__flex-item mt-2 bt'>
                <SearchSharpIcon />
              </Button>
              <Button buttonType='unit__flex-item mt-2 bt'>
                <CachedSharpIcon />
              </Button>
              <AddNewUnit />
            </div>
          </div>
        </div>
        <table className=' table-hover w-100 unit__table-entries'>
          <thead>
            <th className='unit__status-buttons'>Status</th>
            <th>Serial</th>
            <th>Type</th>
            <th>Name</th>
            <th>Assigned To</th>
            <th>From</th>
          </thead>
          {currentPosts.map((unit, i) => {
            return <UnitsEntries {...unit} key={i} />
          })}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={unitsFilter.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </table>
      </div>
    </div>
  )
}
export default Units
