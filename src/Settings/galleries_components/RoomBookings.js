import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import {
    Dialog,
    DialogActions,
    DialogContent,  
    DialogTitle,
    Button,
    Grid,
  } from '@material-ui/core';
  import VisibilityIcon from '@material-ui/icons/Visibility';

  const url = require('../../cfg')()

const RoomBookings = (props) => {
    const {room} = props
    const [open1, setOpen] = useState(false);
    const [bookings, setBookings] = useState([])
    const bookingsURL = axios.get(url + `bookings/byroom/${room._id}`);
    
    useEffect(() => {
        axios.all([ bookingsURL ]).then(axios.spread((...responses) => {
            setBookings(responses[0].data)
        })).catch(errors => {
            console.log(errors)
        })
    }, [])
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose1 = () => {
      setOpen(false);
    };

    const getBookingHours = ( dateOne, dateTwo) => {
    
        const milliseconds = Math.abs(new Date(dateTwo) - new Date(dateOne));
        const hours = milliseconds / 36e5;
        console.log(hours )

        var hour = hours;
        var day = 0;
        if (hour>24){
            day = parseInt(hour / 24);
            hour = parseInt(hour % 24);
            return day.toString()+" d"
        }else{
            hour = parseInt(hour); 
            return hour.toString()+" h"
    }
//alert (day);
///alert(hour);
       

    }
    


    return (
        <>
    
        <VisibilityIcon style={{color:"blue", cursor:"pointer"}} onClick={handleClickOpen} />
        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{room.name} Bookings</DialogTitle>
            <DialogContent>
            <Grid container spacing={4}>
            <Grid item xs={3}>
                Topic
            </Grid>
            <Grid item xs={3}>
                Hours
            </Grid>
            <Grid item xs={3}>
                From
            </Grid>
            <Grid item xs={3}>
                Until
            </Grid>
           </Grid>
               {bookings.map(b => 
                <Grid container spacing={4}>
                <Grid item xs={3}>
                    {b.topic}
                </Grid>
                <Grid item xs={3}>
                    {getBookingHours(b.from, b.until)}
                </Grid>
                <Grid item xs={3}>
                    <span style={{"fontSize":10}}>{b.from}</span>
                </Grid>
                <Grid item xs={3}>
                    <span style={{"fontSize":10}}>{b.until}</span>
                </Grid>
               </Grid>
               )}
                
            
            
            
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
                Cancel
            </Button>
            
            </DialogActions>
        </Dialog>

        </>
    )
}

export default  RoomBookings