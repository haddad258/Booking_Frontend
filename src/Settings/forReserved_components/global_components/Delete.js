import React ,{useState} from 'react'
import faker from 'faker'
import axios from 'axios'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,    
    Button,
    TextField,
    Grid
  } from '@material-ui/core';


import cfg from '../../../cfg';
const url = cfg.url;

 

const Delete = (props) => {
    const {target, id} = props
    const [open, setOpen] = React.useState(false);
    
    const [values, setValues] = useState({});
    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
            
        });
    };
    const deleteItem = async () => {
        
        axios.delete(url + `${target}/${id}`, values).then(response => response.status)
            .then((status) => {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                if (status === 200) setOpen(false)
            })
        
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   
    
        
    
    return (
        <div style={{ }}>
        <DeleteForeverIcon onClick={handleClickOpen} color="danger" style={{ color:"red", position: "absolute", top: 10, right: 20, cursor: "pointer" }} />
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            
            <DialogContent>
            <DialogContentText>
                Are you sure about deleting.
                
            </DialogContentText>

                <Grid container spacing={3} >

                </Grid>


            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={deleteItem} color="danger">
                Delete
            </Button>
            </DialogActions>
        </Dialog>

        </div>
    )
}

export default  Delete