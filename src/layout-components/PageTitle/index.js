import React, { Fragment } from "react";

import { Paper } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import "./style.scss";
import { Link } from "react-router-dom";

function PageTitle({pathTitle}) {
  const path = window.location.pathname.split("/").filter((el) => {
    return el !== "";
  });

  return (
    <Fragment>
      <Paper square elevation={2} className="app-page-title">
        <div className="headerContainer">
          <div className="flex">
            <div className="routeName">{pathTitle || path[0]}</div>
            <Link to="DashboardDefault">
              <HomeIcon style={{ color: "#3D4977" }} />
            </Link>
            {path.map((el, i) => {
              return (
                <Fragment key={i}>
                  <div className="slash">/</div>
                  {i === 0 ? (
                    <Link to={`/${el}`}>
                      <div className="subRouteName">{el}</div>
                    </Link>
                  ) : (
                    <div className="subRouteName">{el}</div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </Paper>
    </Fragment>
  );
}

export default PageTitle;
