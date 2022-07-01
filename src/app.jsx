import { useState } from "react";
// import Navbar from "./components/organisms/Navbar/Sidebar";
import SideBar from './components/organisms/SideBar/SideBar';
import Header from './components/organisms/Header/Header';
import SideBarData from './components/organisms/SideBar/SideBarData';
import TopUsers from './components/organisms/Reports-Content/Top-Users/TopUsers'
// import {BrowserRouter as Router} from "react-router-dom";
import { routes } from "./routes/AppRoutes";
import { Route, Routes, useLocation } from "react-router-dom";
import Reports from './components/pages/Reports/Reports'
import Settings from './components/pages/Settings/Settings-Units' 
import Integrity from './components/organisms/Reports-Content/Integrity/Integrity'
import Statistics from './components/organisms/Reports-Content/Statistics/Statistics'
import Unit from './components/organisms/Reports-Content/UnitByState/UnitByState'
import './app.scss';

const NavScreen = (val) => {
    
    return (
        <SideBar navPath={
                val.navPath
            }
            icon={
                val.icon
            }
            labelName={
                val.labelName
            }/>
    );
};
function App() {
    // const location = useLocation();
    // const [navCSS, setnavCSS] = useState("nav-list");
    // let searchQuery = location.pathname;
    // if(searchQuery==='/settings/unit-types')
    // {
    //     setnavCSS("nav-list")
    // }
    // else if(searchQuery==='/topusers')
    // {
    //     setnavCSS("nav-report")
    // }
    return (
        
        <div className="App">
            <Header/>
            <div className="content">
                    <ul className="nav-list">
                        {
                        SideBarData.map(NavScreen)
                    }</ul>
            {/* <Navbar /> */}
            {routes}
            <div className='dynamic-content'>
                <Routes>
                <Route path="/topusers" element = {<TopUsers/>}></Route>
                <Route path="/integrity" element = {<Integrity/>}></Route>
                <Route path="/statistics" element = {<Statistics/>}></Route>
                <Route path="/units" element = {<Unit/>}></Route>
              </Routes>
                </div>
                {/* <Reports className='dynamic-content'></Reports> */}
        
            </div>
            
            
        </div>
     
    );
}

export default App;
