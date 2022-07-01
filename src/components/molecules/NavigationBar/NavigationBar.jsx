import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtonNav from '../../atoms/Button-Nav/Button-Nav'
import "./NavigationBar.scss"

const NavigationBar = () => {
    return (
        <nav className='navigation-bar'>
            {/* TODO: Keep the CSS intact for the active nav link */}
            <ButtonNav buttonType={"flex-sm-fill text-sm-center report-header-tile"}><NavLink className='navbar-link nav-link' to="/statistics">Statistics</NavLink></ButtonNav>
            <ButtonNav buttonType={"flex-sm-fill text-sm-center report-header-tile"}><NavLink className='navbar-link nav-link' to="/unitsbystate">Units by state</NavLink></ButtonNav>
            <ButtonNav buttonType={"flex-sm-fill text-sm-center report-header-tile"}><NavLink className='navbar-link nav-link' to="/integrity">Integrity</NavLink></ButtonNav>
            <ButtonNav buttonType={"flex-sm-fill text-sm-center report-header-tile"}><NavLink className='navbar-link nav-link' to="/topusers">Top users</NavLink></ButtonNav>
        </nav>
    )
}

export default NavigationBar