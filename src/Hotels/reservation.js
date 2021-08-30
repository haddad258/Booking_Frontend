import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    Grid,
    TextField,
  } from '@material-ui/core';
  const url = require('../../src/cfg')();
  
const Reservation = (props) => {
    const {room} = props
    const [open1, setOpen1] = React.useState(false);
    
    const [values, setValues] = useState([]);
    const [email,setemail] = React.useState();
 
        const handleChange = event => {
          setValues({
              ...values,
              [event.target.id]: event.target.value,
              
          });
        } 
    useEffect(() => {
        const fetchData = async () => {
        await axios.get(url+"userInformation").then((res) => {
        setemail(res.data.email);
        console.log(res.data.email);
         });
         };
        fetchData();
          }, []);
        
    const submitValue = async () => {
        values.addressMail=email;
       values.room=room;
       axios.post(url+"calendar/add", values).then(response => response.status)
            .then((status) => {
               alert(JSON.stringify("success"))
                if (status == 200) setOpen1(false)
            })

        alert(JSON.stringify(values, null, 4))
    }
    
      const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };
   

    return (
        <div style={{ }}>
            <Button
            onClick={handleClickOpen1}>
            <AddCircleOutlineIcon  color="grey" style={{ fontSize: 80 }}  />
            </Button>

        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Reservation</DialogTitle>
            <DialogContent>
            <DialogContentText>
             
          </DialogContentText>
          <TextField
          margin="normal"
          variant="outlined"
                    autoFocus
                    margin="dense"
                    id="event"
                    label="event"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.event}
                />  
            
                <Grid container spacing={3} >
                <Grid item md={6} xs={12} >
                <TextField
                margin="normal"
                variant="outlined"
                    autoFocus
                    margin="dense"
                    id="dateDebut"
                    label="start from"
                    type="date"
                    fullWidth
                    onChange={handleChange}
                    value={values.dateDebut}
                />
                 </Grid>
                 <Grid item md={6} xs={12} >
                 <TextField
                 margin="normal"
                 variant="outlined"
                    autoFocus
                    margin="dense"
                    id="heuredebut"
                    
                    label="from"
                    type="time"
                    fullWidth
                    onChange={handleChange}
                    value={values.heuredebut}
                />
                </Grid>
       
                <Grid item md={6} xs={12} >
                <TextField
                margin="normal"
                variant="outlined"
                    autoFocus
                    margin="dense"
                    id="dateFin"
                    type="date"
                    label="end"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.dateFin}
                    />
                    </Grid>
                     <Grid item md={6} xs={12} >
                 <TextField
                 margin="normal"
                 variant="outlined"
                    autoFocus
                    margin="dense"
                    id="heurefin"
                    type="time"
                    label="to"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.heurefin}
                />
                </Grid>
                </Grid>
                <div> 
                
        </div> 
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose1, submitValue} color="primary">
                Add
            </Button>
            </DialogActions>
        </Dialog>

        </div>
    )
}

export default  Reservation