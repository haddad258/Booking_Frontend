import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    Grid,
  } from '@material-ui/core';


import List from "./forReserved_components/global_components/List"
import cfg from '../../src/cfg'; 

const url = cfg.url + "common/";
const buildingsURL = axios.get(url + "buildings/");
const zonesURL = axios.get(url + "zones/");
const floorsURL = axios.get(url + "floors/");
const roomsURL = axios.get(url + "rooms/");


function ForReserved() {


    const [buildings, setBuildings] = useState([]);
    const [zones, setZones] = useState([]);
    const [floors, setFloors] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.all([
            buildingsURL ,
            zonesURL ,
            floorsURL ,
            roomsURL ,
        ]).then(axios.spread((...responses) => {

        
            setBuildings(responses[0].data)
            setZones(responses[1].data)
            setFloors(responses[2].data)
            setRooms(responses[3].data)


        })).catch(errors => {
            console.log(errors)
        })
    }, [])

    return (
     
           <Grid container spacing={4} >
            <Grid item lg={3} xs={12} md={6} xl={3}>
            <List targetObject={buildings} target={"buildings"} />
            </Grid>
            <Grid item lg={3} xs={12} md={6} xl={3} >
            <List targetObject={zones} target={"zones"} buildings={buildings} />
            </Grid>
            <Grid item lg={3} xs={12} md={6} xl={3}>
            <List targetObject={floors} target={"floors"} zones={zones}  buildings={buildings}  />
            </Grid>
            <Grid item lg={3} xs={12} md={6} xl={3} >
            <List targetObject={rooms} target={"rooms"} floors={floors} zones={zones}  buildings={buildings} />
            </Grid>
           </Grid>
           
     
    )
}

export default ForReserved
