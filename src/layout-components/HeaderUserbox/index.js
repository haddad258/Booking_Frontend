import React, { Fragment } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import avatar5 from '../../assets/images/avatars/avatar5.jpg';
export default function HeaderUserbox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
     
      <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
        <Box>
         <AccountCircleIcon color="primary" fontSize="large"/>
          
        </Box>
        </Button>
        {("1"=="0")&&
        <div> 
        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">connexion</div>
       
        </div>
        
      

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
            <Box>
            <AccountCircleIcon color="primary"/>
            </Box>
            <div className="pl-3  pr-3">
              <div className="font-weight-bold text-center pt-2 line-height-1">
                connexion
              </div>
            
            </div>
            <Divider className="w-100 mt-2" />
            <Link className="float-left" to="/account/signin" >
            <ListItem button> <IconPersonBadgeFill /> se connecter</ListItem>
            </Link>
            
            <Link className="float-left" to="/account/signup" >
            <ListItem button> creer un compte</ListItem>
            </Link>
           
          
          </List>
        </div>
      </Menu>
      </div>
      }
        {("1"=="1")&&
        <div> 
        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">admin</div>
       
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
            <Box>
            <AccountCircleIcon color="primary"/>
            </Box>
            <div className="pl-3  pr-3">
              <div className="font-weight-bold text-center pt-2 line-height-1">
                admin
              </div>
            
            </div>
            <Divider className="w-100 mt-2" />
            <Link className="float-left" to="/" >
            <ListItem button> <IconPersonBadgeFill /> Mon profile</ListItem>
            </Link>
            <Link className="float-left" to="/account/profile" >
            <ListItem button><SettingsIcon/>Parametres</ListItem>
            </Link>
            <Link className="float-left" to="/account/Notification" >
            <ListItem button> <IconBellFill className="text-primary" /> Notification</ListItem>
            </Link>
            <Link className="float-left" to="/account/Notification" >
            <ListItem button>  <IconDoorClosedFill className="text-danger" />déconnexion</ListItem>
            </Link>
          
          </List>
        </div>
      </Menu>
      </div>
      }
    </Fragment>
  );
}
