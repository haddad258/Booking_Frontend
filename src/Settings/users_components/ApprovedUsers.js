import './style.css'
import React from 'react'
import {
    Grid,
    IconButton,
    Card,
    CardContent,
    CardHeader,
    Typography,
  } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import UsersTable from './UsersTable'
import AddUserModal from './AddUserModal'
  const ApprovedUsers = (props) => {
    const {users , privileges} = props



    return (
        <Card >
            
              <div className="customFlex">
                <h1  className="ubuntu">Approved Users</h1>
                <AddUserModal privileges={privileges} />
              </div>
            
            
            <CardContent>
            {/*
            <PerfectScrollbar className="scroll-area-lg shadow-overflow" style={{ paddingTop: 5}}>
             {users.map((user) => (user.approved != 0) ? <h5>{user.firstName}</h5> : null)}  
            </PerfectScrollbar>
            */}

            <UsersTable users = {users} />
            
            </CardContent>
        

        </Card> 
       
    )
}

export default ApprovedUsers
