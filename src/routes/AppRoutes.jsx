import React from "react";
import { Route, Routes } from "react-router-dom";
// import Reports from "../components/pages/Reports/Reports"
import Settings from '../components/pages/Settings/Settings-Units'
import Persons from '../components/pages/Persons/Persons'
import TopUsers from '../components/organisms/Reports-Content/Top-Users/TopUsers'
import Units from "../components/pages/Units/Units"
export const routes = (
    

        <Routes>
       
            <Route path="/settings/unit-types" element={<Settings/>} />
            <Route path="/persons" element={<Persons/>}></Route>
            <Route path="" element={<Units/>} />
                
           
            
            
     
            {/* your routes come here */}
        </Routes>
      
    
);
