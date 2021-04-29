import React ,{useState} from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';

import {
    FormControlLabel,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Checkbox,
    Button,
    List,
    ListItem,
    TextField,
    FormControl,
    ListItemText,
    Card,
    InputLabel,
    Grid,
  } from '@material-ui/core';
  import VisibilityIcon from '@material-ui/icons/Visibility';

import cfg from '../../cfg';
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
            <DialogContentText>
               <Grid>
               <Grid item xs={12}>
                  <span style={{color:"green" ,fontSize:'20'}}> {room.Bookings.length} Bookings </span>  
                  <VisibilityIcon style={{color:"blue"}} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    autoFocus
                    margin="dense"
                    label="Topic"
                    fullWidth
                    onChange={(e) => setTopic(e.target.value)}                   
                    />
                </Grid>
                <Grid item xs={12}>
                  <br></br>
                  <InputLabel> From :</InputLabel>
                  <DatePicker
                    onChange={setFrom}
                    value={startDate}
                  />
                </Grid>
                <Grid item xs={12}>
                  <br></br>
                  <InputLabel> to :</InputLabel>
                  <DatePicker
                    onChange={setUntil}
                    value={endDate}
                  />
                </Grid>
               </Grid>
                
            </DialogContentText>
            
            
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