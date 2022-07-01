import React from 'react'
import './TopUsersContentSection.scss'

const TopUsersContentSection = ({id,person,email,skype,units}) => {
    return (
        <>
                <tr className="unit-row" >
                  <td className="col-2 align-right">{units}</td>
                  <td className="col-2 align-right col-user">{person}</td>
                  <td className="col-2">{email}</td>
                  <td className="col-2">{skype}</td>
                </tr>
        </>
    )
}

export default TopUsersContentSection
