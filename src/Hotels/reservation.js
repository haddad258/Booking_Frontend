import React ,{useState} from 'react'
import axios from 'axios'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
    FormControlLabel,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Checkbox,
    MenuItem,
    Button,
    Grid,
    ListItem,
    TextField,
    FormControl,
    ListItemText,
    Card,
  } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { FormLabel, FormGroup } from '@material-ui/core';



const Addtransport = (props) => {
    const {privileges} = props
    const [open1, setOpen1] = React.useState(false);
    
    const [values, setValues] = useState([]);
    const [state,setState] = React.useState();
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
      
    
      
      
    
     
     
        // Request made to the backend api 
        // Send formData object
        const handleChange = event => {
          setValues({
              ...values,
              [event.target.id]: event.target.value,
              
          });
        } 

        
    const submitValue = async () => {
      
       
       

       axios.post("http://localhost:3002/calendar/add", values).then(response => response.status)
            .then((status) => {
               alert(JSON.stringify("success"))
                if (status == 200) setOpen1(false)
            })

        //alert(JSON.stringify(values, null, 4))
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
                    autoFocus
                    margin="dense"
                    id="event"
                    label="event"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.event}
                />  
            
                <TextField
                    autoFocus
                    margin="dense"
                    id="addressMail"
                    label="organisator"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.addressMail}
                />
                <Grid container spacing={3} >
                <Grid item md={6} xs={12} >
                <TextField
                    autoFocus
                    margin="dense"
                    id="dateDebut"
                    label="start from"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.dateDebut}
                />
                 </Grid>
                 <Grid item md={6} xs={12} >
                 <TextField
                    autoFocus
                    margin="dense"
                    id="heuredebut"
                    label="from"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.heuredebut}
                />
                </Grid>
       
                <Grid item md={6} xs={12} >
                <TextField
                    autoFocus
                    margin="dense"
                    id="dateFin"
                    label="end"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.dateFin}
                    />
                    </Grid>
                     <Grid item md={6} xs={12} >
                 <TextField
                    autoFocus
                    margin="dense"
                    id="heurefin"
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

export default  Addtransport