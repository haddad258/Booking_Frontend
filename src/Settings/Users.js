import React, { useEffect, useState } from "react";
import axios from "axios";
import cfg from '../../src/cfg';
import {
    Grid,
  } from '@material-ui/core';

import NewUsers from "./users_components/NewUsers"
import ApprovedUsers from "./users_components/ApprovedUsers" 
const url = cfg.url;
const requestUsers = axios.get(url + "users/");


function Users() {

    const [users, setUsers] = useState([]);
 
    
   
    useEffect(() => {
        axios.all([requestUsers, ]).then(axios.spread((...responses) => {
            setUsers(responses[0].data) })).catch(errors => {
            console.log(errors) }) }, [])

    const getData = () =>{
        
        axios.get(url + "users/").then(res =>  setUsers(res.data))
    }
   

    return (
        <div>
        
           <Grid container spacing={3} >
            <Grid item lg={4} xs={12}>
                <NewUsers users={users} getData={getData} />
            </Grid>
            <Grid item lg={8} xs={12} >
                <ApprovedUsers users={users} />
            </Grid>
           </Grid>
           
        </div>
    )
}

export default Users
