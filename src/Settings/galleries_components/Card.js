import React from 'react'
import {
     Card, CardContent, Button, Badge
  } from '@material-ui/core';
import Sliding from './Sliding';
import RoomDetails from './RoomDetails'
const  CustomCard = (props) => {
    const imgs =[
        "https://www.aver.com/Upload/Expert/31/Main.jpg",
        "https://www.italydreamdesign.com/wp-content/uploads/IME02.jpg",
        "https://assets.website-files.com/5bf604124fac8067e66a2889/5cc8df3c1273fae158f4642b_meet-space.jpg"
    ]
    const {room}  = props
    return (
        
        <Card className="mb-4">
        <Sliding imgs={imgs} title={room.title}/>
        <CardContent className="p-3">
        <h5 className="card-title font-weight-bold font-size-lg">
            {room.title}
        </h5>
        <p className="card-text">
            {room.description}
        </p>
        <RoomDetails room={room} />{" "}
        
        {(room.reserved) ? <span className="m-1 badge badge-danger" > Reserved Now</span> : <span className="m-1 badge badge-succed" >Avaliable</span>}
        </CardContent>
        </Card>
        
    )
}

export default CustomCard
