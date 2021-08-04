import React, { Fragment,useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { NotificationActions, NotifcationContainer } from 'material-ui-notifications';
import {
  Hidden,
  IconButton,
  AppBar,
  Box,
  Button,
  Tooltip
} from '@material-ui/core';
import { format } from "date-fns";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';
import projectLogo from '../../assets/images/react.svg';

import HeaderLogo from '../../layout-components/HeaderLogo';
import HeaderUserbox from '../../layout-components/HeaderUserbox';
import Search from '../Search';

import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { NavLink  } from 'react-router-dom';

const Header = props => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };
  const {
    headerShadow,
    headerFixed,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [values, setValues] = useState([]);
  const handleChange = event => {
    setValues({
        ...values,
        [event.target.id]: event.target.value,
        
    });
  } 
  return (
    <Fragment>
      <AppBar
        color="secondary"
        className={clsx('app-header', {})}
        position={headerFixed ? 'fixed' : 'absolute'}
        elevation={headerShadow ? 11 : 3}>
  {!props.isCollapsedLayout && <HeaderLogo />}
        <Box className="app-header-toolbar">
          <Hidden lgUp>
          <Box
              className="app-logo-wrapper"
              title="booking">
              <Link to="/Acceuil" className="app-logo-link">
              
                <IconButton
                  color="primary"
                  size="medium"
                  className="app-logo-btn">
                  <img
                    className="app-logo-img"
                    alt="booking"
                    src={projectLogo}
                  />
                  <HomeIcon/>
                </IconButton>
              </Link>
              </Box>
              <Hidden smDown>
                <Box className="app-logo-text">
                </Box>
              </Hidden>
         
          </Hidden>
          <Hidden mdDown>
            <Box className="d-flex align-items-center">
              
            <div className="col-md-5">
            <input
          id="name"
          name="search"
          type="text"
          onChange={handleChange}
          value={values.name}
          style={{ width: 500}}
         
        />
        <label htmlFor="search"></label>
        <button
          
          type="submit"
          aria-label="Search"
        >
          <SearchIcon />
        </button>
            </div>
            
  
        </Box>  
       
          <Box className="d-flex align-items-center">
          <div className="position-relative d-inline mr-3">
                <Link to="/cart" className="btn btn-primary">
                <ShoppingCartIcon color="primary"/> 
                  <div className="position-absolute top-0 left-100 translate-middle badge bg-danger rounded-circle">
                    2
                  </div>
                </Link>
              </div>
          <HeaderUserbox />
            <Box className="toggle-sidebar-btn-mobile">
              <Tooltip title="Toggle Sidebar" placement="right">
                <IconButton
                  color="inherit"
                  onClick={toggleSidebarMobile}
                  size="medium">
                  {sidebarToggleMobile ? (
                    <MenuOpenRoundedIcon />
                  ) : (
                    <MenuRoundedIcon />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          </Hidden>
        </Box>
      </AppBar>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  headerShadow: state.ThemeOptions.headerShadow,
  headerFixed: state.ThemeOptions.headerFixed,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);