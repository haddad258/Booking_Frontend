import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    Grid,
  } from '@material-ui/core';
import Buildings from "./forReserved_components/Buildings"
import Zones from "./forReserved_components/Zones"
import Floors from "./forReserved_components/Floors"
import Rooms from "./forReserved_components/Rooms"

import cfg from '../../src/cfg'; 

const url = cfg.url;
const buildingsURL = axios.get(url + "buildings/list");
const zonesURL = axios.get(url + "zones/list");
const floorsURL = axios.get(url + "floors/list");
const roomsURL = axios.get(url + "rooms/list");


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

        
            setBuildings(responses[0].data.content)
            setZones(responses[1].data.content)
            setFloors(responses[2].data.content)
            setRooms(responses[3].data.content)


        })).catch(errors => {
            console.log(errors)
        })
    }, [])

    return (
     
           <Grid container spacing={4} >
            <Grid item lg={3} xs={12} md={6} xl={3}>
                <Buildings buildingsList={buildings}  />
            </Grid>
            <Grid item lg={3} xs={12} md={6} xl={3} >
                <Zones zonesList={zones}  buildingsList={buildings}/>
            </Grid>
            <Grid item lg={3} xs={12} md={6} xl={3}>
                <Floors floorsList={floors} zonesList={zones}  buildingsList={buildings}  />
            </Grid>
            <Grid item lg={3} xs={12} md={6} xl={3} >
                <Rooms  roomsList={rooms} floorsList={floors} zonesList={zones}  buildingsList={buildings} />
            </Grid>
           </Grid>
           
     
    )
}

export default ForReserved
