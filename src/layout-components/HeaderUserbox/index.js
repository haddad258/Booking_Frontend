import React, { Fragment, useEffect, useState } from "react";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import Cookies from "js-cookie";

import {
  Avatar,
  Box,
  Menu,
  Button,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";

import axios from "axios";
import { Link } from "react-router-dom";
const url = require('../../cfg')()
export default function HeaderUserbox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [user, setUser] = useState({});
  const [userrole, setuserrole] = useState("");
  
  useEffect(() => {
    const fetchUsers = async () => {
      await axios.get(url+"userInformation").then((res) => {
        setUser({
          name: `${res.data.firstName} ${res.data.lastName}`,
          image: res.data.avatar,
          role:  res.data.role,
        });
        setuserrole(res.data.role);
      });
    };
    fetchUsers();
  }, []);
  const lougout = () => {
    Cookies.remove("token");
  };

  return (
    <Fragment>
      {userrole=="" && <div>
     <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center"
      >
        <Box>
          <Avatar sizes="44" src={user.avatar} />
        </Box>

        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={["fas", "angle-down"]} className="opacity-5" />
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        onClose={handleClose}
        className="ml-2"
      >
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex  flex-column pt-0">
            
         
            <Link to="/LandingPage">
              <ListItem button>
                <ExitToAppIcon style={{ marginRight: "10px" }} /> connexion
              </ListItem>
            </Link>          
          </List>
        </div>
      </Menu>
      </div>}
     {userrole!="" && <div>
     <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center"
      >
        <Box>
          <Avatar sizes="44" src={user.avatar} />
        </Box>

        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={["fas", "angle-down"]} className="opacity-5" />
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        onClose={handleClose}
        className="ml-2"
      >
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex  flex-column pt-0">
            <Box style={{ margin: "auto" }}>
              <Avatar sizes="44" src={user.avatar} />
            </Box>
            <div className="">
              <div className="font-weight-bold text-center pt-2 line-height-1">
                {user.name}
              </div>

              <div className="text-black-50 text-center  ">{user.role}</div>
            </div>
            <Divider className="w-100 mt-2" />
            <Link to="/userProfile">
              <ListItem button>
                <PersonIcon style={{ marginRight: "10px" }} /> Profile
              </ListItem>
            </Link>
            <Link to='/account/Notification'>
            <ListItem button>
            <NotificationsIcon style={{ marginRight: "10px" }} /> notification
            </ListItem>
            </Link>
            <Link to="/">
              <ListItem button onClick={lougout}>
                <ExitToAppIcon style={{ marginRight: "10px" }} /> Déconnexion
              </ListItem>
            </Link>
          </List>
        </div>
      </Menu>
      </div>}
    </Fragment>
  );
}
