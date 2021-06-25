import React, { Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton, Box } from '@material-ui/core';

import projectLogo from '../../assets/images/react.svg';

const HeaderLogo = () => {
  return (
    <Fragment>
      <div className={clsx('app-header-logo', {})}>
        <Box
          className="header-logo-wrapper"
          title="booking">
          <Link to="/Acceuil" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="large"
              className="header-logo-wrapper-btn">
             
             
              <HomeIcon/>
            </IconButton>
          </Link>
          <Box className="header-logo-text">booking</Box>
        </Box>
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
