import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import './Header.scss';
const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Nav = styled.div`
  background: white;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #303030;
  width: 250px;
  height: 150vh;
  
  justify-content: center;
  position: fixed;
  top: 3.7em;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  position:absolute;

  @media screen and (max-width:480px){
    width:175px;
    display:flex
  }

  @media screen and (min-width:768px){
    width:175px;
    display:none
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  
`;
const Header = () => {

  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setSidebar(false));

  const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
     <div ref={ref}>
    <Nav >
    <NavIcon to='#' className='hamburger-icon'  >
      <FaIcons.FaBars onClick={showSidebar} className="hamburger-icon"/>
    </NavIcon>
      <div className='app-heading'>INVENTORY APP</div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbk_FsVH_tzUoFh4glBx_6gKR0fvnLZYGvQ&usqp=CAU" alt='profile-icon' className='profile-icon'/>
      <div className='profile-name'>Owner</div>
  </Nav>

  <SidebarNav sidebar={sidebar} >
          <SidebarWrap  >
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
  </div>
  </>
    );
};

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}

export default Header;