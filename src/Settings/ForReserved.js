import React, { useEffect, useState } from "react";
import axios from "axios";
import cfg from '../../src/cfg';
import {
    Grid,
  } from '@material-ui/core';


  
const url = cfg.url;
const buildings = axios.get(url + "buildings/");


function ForReserved() {

    

    return (
     
           <Grid container spacing={3} >
            <Grid item lg={3} xs={12}>
                buildings
            </Grid>
            <Grid item lg={3} xs={12} >
               zones
            </Grid>
            <Grid item lg={3} xs={12}>
                floors
            </Grid>
            <Grid item lg={3} xs={12} >
               rooms
            </Grid>
           </Grid>
           
     
    )
}

export default ForReserved
