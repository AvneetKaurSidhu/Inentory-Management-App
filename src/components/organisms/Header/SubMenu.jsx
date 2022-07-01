import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:active{
      color: #1E90FF;
  }
  &:hover {
    background: black;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
  &:focus-within{
    color:#1E90FF;
}
@media screen and (max-width:480px){
  font-size: 15px;
}


`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: ##e1e9fc;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: black;
    cursor: pointer;
  }
  &:focus-within{
      color:#1E90FF;
  }
 

  @media screen and (max-width:480px){
    font-size: 15px;
    padding-left: 2.5rem;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
 
  const showSubnav = () => setSubnav(!subnav); 

  
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav} >
        <div>
          {item.icon}
          <SidebarLabel className='sidebar-label active-link'>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;