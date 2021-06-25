import React, { Fragment, useState ,forwardRef} from 'react';
import { Link } from 'react-router-dom'

import { Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { Typography,ListItem, Button, Collapse } from '@material-ui/core';
import RangeSlider from 'react-bootstrap-range-slider';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {
  Avatar,
  Box,
  Menu,

  List,
 
  Tooltip,
  Divider
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';

import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import SearchIcon from '@material-ui/icons/Search';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Test from '../../layout-components/PageTitle/test';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const CustomRouterLink = forwardRef(function CustomLink(props, ref) {
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  );
});


function PageTitle(props) {
  const [open, setOpen] = React.useState(false);
 
  const classes = useStyles();
  const [ value, setValue ] = useState(0); 
  const [openn, setOpenn] = React.useState(false);
  const [opennn, setOpennn] = React.useState(false);
  const [opennnn, setOpennnn] = React.useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleToggles = () => {
    setOpennnn(opennnn => !opennnn);
  };
  const handleTogglesss = () => {
    setOpenn(openn => !openn);
  };
  const handleToggless = () => {
    setOpennn(opennn => !opennn);
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleToggle = () => {
    setOpen(open => !open);
  };
  let paddingLeft = 22;

  if (2 > 0) {
    paddingLeft = 16 + 20 * 2;
  }
  const style = {
    paddingLeft
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    setOpen(true);
  };

 

  return (
    <Fragment>
      <Paper square elevation={2} className="app-page-title">
        
        
          
         
      
      
      
            
          
           
            
         
      
      </Paper>
    </Fragment>
  );
}

export default PageTitle;
