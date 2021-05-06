import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import {
  Hidden,
  IconButton,
  AppBar,
  Box,
  Button,
  Tooltip
} from '@material-ui/core';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';
import projectLogo from '../../assets/images/react.svg';

import HeaderLogo from '../../layout-components/HeaderLogo';
import HeaderUserbox from '../../layout-components/HeaderUserbox';
import Appbar from '../../layout-components/Appbar';

import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


import { NavLink  } from 'react-router-dom';

const NavBar = () => {

const renderButtons = () => {
   
     return<>
     <NavLink className="nav-link" to='/Acceuil'></NavLink>
     {/* <NavLink className="nav-link" to="/Profile">Profile</NavLink>    */}
     </>
    
  }
      return (
            
        <div className="App">
          <header className="header"> 
            
              <div className="clear"></div>
              <div className="nav-bar">
                  {renderButtons()}  
               </div>
          </header>
          <Appbar/>
        </div>
        
      )
  }

export default NavBar
