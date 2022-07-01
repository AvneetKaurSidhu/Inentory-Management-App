import fetchUrls from '../../../config/config.json';
import useFetch from '../../../config/useFetch';
import './Sidebar-persons.scss';
import Button from '../../atoms/Button-Person/Button';
import { useState } from 'react';
import Popup from './Popup';
import { FaSearch } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
 
const func2=(category)=>{
  console.log("inside");
console.log(category);
// let pr = JSON.parse(localStorage.getItem("p"));
// if(pr)
// {
// console.log("present");
// }
localStorage.setItem("type",category.type);
localStorage.setItem("personname",category.personname);
localStorage.setItem("email",category.email);
localStorage.setItem("status",category.status);
localStorage.setItem("Assigned to", category.name);
localStorage.setItem("model", category.model);
localStorage.setItem("size", category.size);
localStorage.setItem("taken", category.from);
localStorage.setItem("available", category.to);
setIsOpen(!isOpen);

}

  const nameList = useFetch(fetchUrls.personsApi, "GET");

 let categories = null;
  if (nameList.apiData !== null) {
    const nameListData = nameList.apiData;
  

    categories = nameListData.map((person) => {
      
      return (
        <section className="namesSection" key={person.id}>
         
            <Button onClick={() => {  func2(person);}}>
            <Button className={"namesSidebar"} >{person.personname}</Button>
              <Button
           
            className={"namesSidebar"}> {person.email}</Button>
            </Button>
        </section>)
    });
    
  }

  return (
    <>
    <aside className="sidebar">
    <div className="search">
                <div className="personsHeading">Persons</div>
                <i className="searchButton"><FaSearch /></i>
                
            </div>
      {categories}
    </aside>
    {isOpen && <Popup
      content={<>
        
      </>}
     
       handleClose={func2}
    />}


  </>
  );
}














