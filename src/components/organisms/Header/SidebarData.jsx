import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import GroupsIcon from '@mui/icons-material/Groups';
import AssessmentSharpIcon from '@mui/icons-material/AssessmentSharp';
import PersonIcon from '@mui/icons-material/Person';
// import "./Sidebar.scss";

export const SidebarData = [
  {
    title: 'Units',
    path: '/',
    icon: <LaptopWindowsIcon fontSize='small'></LaptopWindowsIcon>
  },

  {
    title: 'Persons',
    path: '/persons',
    icon:<GroupsIcon fontSize='small'></GroupsIcon>
   
  },
  {
    title: 'Reports',
    path: '/statistics',
    icon: <AssessmentSharpIcon fontSize='small' />
  },
  
  {
    title: 'Settings',
    path: '#',
    icon:  <PersonIcon fontSize='small' />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Unit Types',
        path: '/settings/unit-types',
      },
      {
        title: 'Tags',
        path: '/settings/tags',
    
      }
    ]
  },

];