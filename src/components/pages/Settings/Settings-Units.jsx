import React,{useState} from "react";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { Helmet } from "react-helmet";
// import Units from '../../../server/settings-units.json'
import DisplayUnitList from "../../organisms/Unit-List/Unit-List"
import SettingsForm from "../../molecules/Forms/Form"
// import Navbar from "../../organisms/Navbar/Sidebar";
import "./Settings-Units.scss"


const Settings = () => {
    const [APIData, setAPIData] = useState([]);
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");
  const [icon, setIcon] = useState("");
  const [comments, setComments] = useState("");
  const [propertyRow, setPropertyRow] = useState([""]);
  const [partsRow, setPartsRow] = useState([]);
  const resetFnc=()=>{
    setName("");
    setSname("");
    setIcon("");
    setPropertyRow([""]);
    setPartsRow([]);
    setComments("");
  }
    return (
        <div className="demo">
            <Helmet>
                <title>Inventory Management</title>
                <meta
                    name="description"
                    content="Login Page of the Sabka Bazaar Website"
                />
            </Helmet>
        <div className="container-settings">
            
            <div className="unit-list">
                <DisplayUnitList
                setName={setName}
                setSname={setSname}
                setIcon={setIcon}
                setComments={setComments}
                setPropertyRow={setPropertyRow}
                setPartsRow={setPartsRow}
                addButton={resetFnc}
                APIData={APIData}
                setAPIData={setAPIData} />
                </div>
            <div className="settings-form">
                <SettingsForm 
                 name={name}
                 setName={setName}
                 sname={sname}
                 setSname={setSname}
                 icon={icon}
                 setIcon={setIcon}
                 comments={comments}
                 setComments={setComments}
                 propertyRow={propertyRow}
                 setPropertyRow={setPropertyRow}
                 partsRow={partsRow}
                 setPartsRow={setPartsRow}
                 APIData={APIData}
                 addButton={resetFnc}
                 setAPIData={setAPIData}/>
                </div>
            
        </div>
         

</div>  
    );
};
export default Settings;