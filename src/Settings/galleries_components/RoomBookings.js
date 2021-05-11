import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';

import {
    Dialog,
    DialogActions,
    DialogContent,  
    DialogTitle,
    Button,
    Grid,
  } from '@material-ui/core';
  import VisibilityIcon from '@material-ui/icons/Visibility';

import cfg from '../../cfg';
const url = cfg.url;
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
            <Grid item xs={4}>
                Topic
            </Grid>
            
            <Grid item xs={4}>
                From
            </Grid>
            <Grid item xs={4}>
                Until
            </Grid>
           </Grid>
               {bookings.map(b => 
                <Grid container spacing={4}>
                <Grid item xs={4}>
                    {b.topic}
                </Grid>
                <Grid item xs={4}>
                    {b.from}
                </Grid>
                <Grid item xs={4}>
                    {b.until}
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