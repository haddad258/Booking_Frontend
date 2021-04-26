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
    const {users } = props



    return (
        <Card >
            
              <div className="customFlex">
                <h1  className="ubuntu">Approved Users</h1>
                <AddUserModal />
              </div>
            
            
            <CardContent>

            <UsersTable users = {users}/>
            
            </CardContent>
        

        </Card> 
       
    )
}

export default ApprovedUsers
