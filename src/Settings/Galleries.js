import React, { useEffect, useState,  } from "react";
import axios from "axios";

import {
    Grid,Paper,Card, CardContent, Button, Container,TextField
  } from '@material-ui/core';

import cfg from '../../src/cfg'; 
import CustomCard from "./galleries_components/Card";
import RoomsGallery from "./galleries_components/RoomsGallery";

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
    const [searchTerm , setSearchTerm] = useState("")
   
    const searchByRoomName = (rows) => {
        const columns = rows[0] && Object.keys(rows[0]);
        return rows.filter(row => columns.some(column => row[column].toString().toLowerCase().indexOf(searchTerm) > -1) )
    } 

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
    }, )

    return (
     
        
           <Grid container spacing={4} >
            <Grid item xs={12}>
                
                    <TextField  
                        id="outlined-basic" 
                        label="Search in Rooms" 
                        variant="outlined" 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    /> 
                
            </Grid>
           
            <RoomsGallery rooms={searchByRoomName(rooms)}/>
            
           </Grid>
           
     
    )
}

export default Galleries
