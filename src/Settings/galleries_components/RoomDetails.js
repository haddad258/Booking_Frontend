import React ,{useState, useEffect} from 'react';
import axios from 'axios';

import {
    Dialog,
    DialogActions,
    DialogContent,   
    DialogTitle,
    Button,
    TextField,
    InputLabel,
  } from '@material-ui/core';



import cfg from '../../cfg';
import RoomBookings from './RoomBookings';
const url = cfg.url;
const RoomDetails = (props) => {
    const {room} = props
    const [open1, setOpen] = useState(false);

    const [topic, setTopic] = useState("")
    const [startDate, setFrom] = useState(new Date())
    const [endDate, setUntil] = useState(new Date())
    
    const values = {
      "topic" : topic,
      "room": room._id,
      "user" : "608630bb8935ca398466815a",
      "from": startDate,
      "until": endDate,
    } 
   
    const handleSubmit =  async () => {
      alert(JSON.stringify(values))

      await axios.post(url + `bookings/`, values).then(response => response.status)
      .then((status) => {
          alert(JSON.stringify({"Booking Added": "ok",  "status ": status}))
          if (status === 200) setOpen(false)
      })

    }


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose1 = () => {
      setOpen(false);
    };

    return (
        <>
        <Button color="primary" variant="contained" onClick={handleClickOpen}>
            Booking
        </Button>

        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{room.name}</DialogTitle>
            <DialogContent>
            
            {
              (room.bookings.length > 0) ?
                <span style={{color:"red" ,fontSize:'20'}}> {room.bookings.length} Bookings </span>
              : <span style={{color:"green" ,fontSize:'20'}}> {room.bookings.length} Bookings </span>
            } 
               
                   
                  <RoomBookings room={room} />
                
                
                    <TextField
                    autoFocus
                    margin="dense"
                    label="Topic"
                    fullWidth
                    onChange={(e) => setTopic(e.target.value)}                   
                    />
                
                
                  <br></br>
                  <InputLabel> From :</InputLabel>
                 
                  <TextField
                    id="datetime-local"
                    label="Start Date"
                    type="datetime-local"

                    defaultValue= {startDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e)=> setFrom(e.target.value)}
                    
                  />
                
                
                  <br></br>
                  <InputLabel> to :</InputLabel>
                  <TextField
                    id="datetime-local"
                    label="Start Date"
                    type="datetime-local"
                    defaultValue= {endDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e)=> setUntil(e.target.value)}
                  />
                
               
                
            
            
            
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
                Cancel
            </Button>
            <Button onClick={handleSubmit} color="danger">
                Submit
            </Button>
            </DialogActions>
        </Dialog>

        </>
    )
}

export default  RoomDetails