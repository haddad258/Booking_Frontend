import React, { useEffect, useState } from "react";
import axios from "axios";
import cfg from '../../src/cfg';
import {
    Grid,
  } from '@material-ui/core';

import NewUsers from "./users_components/NewUsers"
import ApprovedUsers from "./users_components/ApprovedUsers"
  
const url = cfg.url;
const requestUsers = axios.get(url + "users/list");
const requestPrivileges = axios.get(url + "privilege/list");

function Users() {

    const [users, setUsers] = useState([]);
    const [privileges, setPrivileges] = useState([]);
    
    useEffect(() => {
        axios.all([requestUsers, requestPrivileges]).then(axios.spread((...responses) => {

            setUsers(responses[0].data.content)
            setPrivileges(responses[1].data.content)
            


        })).catch(errors => {
            console.log(errors)
        })
    }, [])


    return (
        <div>
            {/*users.map((user) => <h1>{user.firstName}</h1>)*/ }
           <Grid container spacing={3} >
            <Grid item lg={4} sm={12}>
                <NewUsers users={users} />
            </Grid>
            <Grid item lg={8} sm={12} >
                <ApprovedUsers users={users} privileges={privileges} />
            </Grid>
           </Grid>
           
        </div>
    )
}

export default Users
