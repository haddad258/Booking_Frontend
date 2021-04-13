import React from 'react'
import {
     Card, CardContent, Button, Badge
  } from '@material-ui/core';
import Sliding from './Sliding';

const  CustomCard = (props) => {
    const imgs =[
        "https://www.aver.com/Upload/Expert/31/Main.jpg",
        "https://cdn.business2community.com/wp-content/uploads/2016/08/conference-room-338563_640-300x199.jpg.jpg",
        "https://www.zdnet.com/a/hub/i/2020/07/21/2a460e27-b484-47e5-86f2-73f414ac07d6/teamsroomsmanagement.jpg"
    ]
    const {img , title , description ,reserved}  = props
    return (
        
        <Card className="mb-4">
        <Sliding imgs={imgs} />
        <CardContent className="p-3">
        <h5 className="card-title font-weight-bold font-size-lg">
            {title}
        </h5>
        <p className="card-text">
            {description}
        </p>
        <Button color="primary" variant="contained">
            Details
        </Button>{" "}
        
        {(reserved) ? <span className="m-1 badge badge-danger" > Reserved Now</span> : <span className="m-1 badge badge-succed" >Avaliable</span>}
        </CardContent>
        </Card>
        
    )
}

export default CustomCard
