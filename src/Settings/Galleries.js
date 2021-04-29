import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    Grid,Paper,Card, CardContent, Button
  } from '@material-ui/core';


import Filter from "./galleries_components/Filter"
import cfg from '../../src/cfg'; 
import CustomCard from "./galleries_components/Card";

const url = cfg.url + "common/";
const buildingsURL = axios.get(url + "buildings/");
const zonesURL = axios.get(url + "zones/");
const floorsURL = axios.get(url + "floors/");
const roomsURL = axios.get(url + "rooms/");


function Galleries() {


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
           <Grid item lg={12}>
           <Paper square elevation={2} className="app-page-title">
           <div>
            <div className="app-page-title--first">
                <div className="app-page-title--heading">
                <h1>Filter Zone</h1>
                <div className="app-page-title--description">
                    Do it later InshaAllah
                </div>
                </div>
            </div>
            </div>
           </Paper>
                </Grid>
                {rooms.map(room => <Grid item lg={3} xs={12} md={6} xl={3}>
                    <CustomCard room={room}/>
                     
                         
                 </Grid>)}
            
           </Grid>
           
     
    )
}

export default Galleries
