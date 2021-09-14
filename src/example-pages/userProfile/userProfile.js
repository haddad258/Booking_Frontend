import { Avatar } from "@material-ui/core";
import { PageTitle } from "layout-components";
import React, { Fragment, useEffect, useState } from "react";
import "./style.scss";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import axios from "axios";
import { Link } from "react-router-dom";
const url = require('../../cfg')()
const UserProfile = (props) => {
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url+"userInformation").then((res) => {
        setUserInformation(res.data);
        console.log(res.data);
      });
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <PageTitle />

      <link
        href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"
        rel="stylesheet"
      />

      <div className="containerProfile">
        <Link to="/profile/edit-profile">
          {" "}
          <div
            style={{
              cursor: "pointer",
              margin: "20px",
              width: "max-content",
              marginLeft: "auto",
            }}
          >
            <div className="editInfo">
              <i className="icon-pencil"></i>
            </div>
          </div>
        </Link>
        <Avatar
          style={{ height: "150px", width: "150px", margin: "auto" }}
          src={userInformation.Avatar}
        />
        <div className="nom">
          {userInformation.firstName} {userInformation.lastName}
        </div>

        <div className="information">
          <div className="flex">
            <div className="left">
              <MailOutlineIcon />
              <div style={{ marginRight: "10px" }} className="fontText">
                Email
              </div>
            </div>
            <div className="fontText">{userInformation.email}</div>
          </div>
          <div className="flex">
            <div className="left">
              <PhoneIcon />
              <div style={{ marginRight: "10px" }} className="fontText">
                N° Mobile
              </div>
            </div>
            <div className="fontText">{userInformation.phonePro}</div>
          </div>
         
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
