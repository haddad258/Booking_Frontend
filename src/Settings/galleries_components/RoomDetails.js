import React ,{useState} from 'react'
import faker from 'faker'
import axios from 'axios'
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
  } from '@material-ui/core';


import cfg from '../../cfg';
const url = cfg.url;
const RoomDetails = (props) => {
    const {room} = props
    const [open1, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose1 = () => {
      setOpen(false);
    };

    return (
        <>
        <Button color="primary" variant="contained" onClick={handleClickOpen}>
            Details
        </Button>

        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{room.name}</DialogTitle>
            <DialogContent>
            <DialogContentText>
               {room.description}
                
            </DialogContentText>
            
            
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

export default  RoomDetails