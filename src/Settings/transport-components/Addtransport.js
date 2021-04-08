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
import AddIcon from '@material-ui/icons/Add';

import cfg from '../../cfg';
const url = cfg.url;
const Addtransport = (props) => {
    const {privileges} = props
    const [open1, setOpen1] = React.useState(false);
    
    const [values, setValues] = useState([]);
    const [state, setState] = useState([]);
    const selectedFile= null;
       
      // On file select (from the pop up) 
      const onFileChange = event => { 
        // Update the state 
        setState({ selectedFile: event.target.files[0] }); 
      }; 
       
      // On file upload (click the upload button) 
      const onFileUpload = () => { 
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          state.selectedFile, 
          state.selectedFile.name 
        ); 
       
        // Details of the uploaded file 
        console.log(state.selectedFile); 
        }
        // Request made to the backend api 
        // Send formData object
    
    
    const submitValue = async () => {
      
       
       

       axios.post(url + `users`, values).then(response => response.status)
            .then((status) => {
               // alert(JSON.stringify({"User Added": values.firstName,  "status ": status}))
                if (status == 200) setOpen1(false)
            })

        //alert(JSON.stringify(values, null, 4))
    }
    const fileData = () => { 
        if (state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {state.selectedFile.name}</p> 
              <p>File Type: {state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 
      const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };
   

    return (
        <div style={{ }}>
            <Button
            
            className="m-2"
            variant="outlined"
            color="primary"
            onClick={handleClickOpen1}>
            Add NEW VEHICLE
            </Button>

        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add NEW VEHICLE</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To add a new VEHICLE to this website, please enter all required fields here.
                
            </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="brand"
                    label="brand"
                    
                    fullWidth
                 
                    value={values.brand}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="matricule"
                    label="matricule"
                    
                    fullWidth
                    
                    value={values.matricule}
                />
        
                <TextField
                    autoFocus
                    margin="dense"
                    id="price"
                    label="price"
                    
                    fullWidth
                    
                    value={values.price}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="color"
                    label="color"

                    fullWidth
                    
                    value={values.color}
                />
              <div> 
            <h1> 
              GeeksforGeeks 
            </h1> 
            <h3> 
              File Upload using React! 
            </h3> 
            <div> 
                <input type="file" onChange={onFileChange} /> 
                <button onClick={onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {fileData()} 
        </div>    
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose1, submitValue} color="primary">
                Subscribe
            </Button>
            </DialogActions>
        </Dialog>

        </div>
    )
}

export default  Addtransport