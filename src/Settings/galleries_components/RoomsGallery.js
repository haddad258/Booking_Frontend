import React from "react";

import {Grid} from '@material-ui/core';


import CustomCard from "./Card";

const RoomsGallery = (props) => {

    const {rooms} = props

    return (
     
        
           
           <>

               
                {rooms.map(room => 
                    <Grid item lg={3} xs={12} md={6} xl={3}>
                        <CustomCard room={room}/>      
                    </Grid>
                )}
            
           </>
           
     
    )
}

export default RoomsGallery
