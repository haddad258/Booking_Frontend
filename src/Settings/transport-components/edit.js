import React ,{useState,useEffect} from 'react'
import faker from 'faker'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditIcon from '@material-ui/icons/Edit';
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


import cfg from '../../cfg';
import Champ from './Champ'
import SelectChamp from './SelectChamp';
const urll = require('../../../src/cfg')()
const url = urll+'forReservation/transport_tools/';

 

const Edit = (props) => {
    const {id,matricule,brand,price,color ,description} = props
    const [open, setOpen] = React.useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [values, setValues] = useState({});
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
	const [items, setItems] = useState([]);
      
    
      
      
    
     const handleChanges= event => {
       if (event.target.files && event.target.files[0])
       {
        setSelectedFile(
URL.createObjectURL(event.target.files[0]) )
      setIsFilePicked(true);
      setValues({
        ...values,
        [event.target.id]: event.target.value,
    });
    }
  } 
    const handleChange = event => {
        setValues({
            ...values,
            [event.target.id]: event.target.value,
            
        });
    };
    const submitValue = async () => {
        alert(JSON.stringify(values))
   
        axios.put(url + `${id}`, values).then(response => response.status)
            .then((status) => {
                alert(JSON.stringify({"Content" : values, "status ": status}))
                if (status === 200) handleClose()
            })
        setOpen(false)
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    
        
    
    return (
        <div style={{ }}>
        
        <FontAwesomeIcon
        onClick={handleClickOpen}
                icon={['far', 'edit']}
                className="font-size-l"
                style={{color:"gray" , cursor : "pointer"}}
                
              />  
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
         
            <DialogTitle id="form-dialog-title">EDIT FORM</DialogTitle>
            <DialogContent>
                <div>
                <div>
            <input id="image" type="file"  onChange={handleChanges}  value={values.image} />
            <img  src={selectedFile} />
          </div>
            <TextField
            autoFocus
            margin="dense"
            id="description"
            label="description"
            defaultValue={description}
            fullWidth
            onChange={handleChange}
            value={values.description}
        />  
    
        <TextField
            autoFocus
            margin="dense"
            id="brand"
            label="brand"
            defaultValue={brand}
            fullWidth
            onChange={handleChange}
            value={values.brand}
        />
        <TextField
            autoFocus
            margin="dense"
            id="matricule"
            label="matricule"
            defaultValue={matricule}
            fullWidth
            onChange={handleChange}
            value={values.matricule}
        />

        <TextField
            autoFocus
            margin="dense"
            id="price"
            label="price"
            defaultValue={price}
            fullWidth
            onChange={handleChange}
            value={values.price}
            />
        <TextField
            autoFocus
            margin="dense"
            id="color"
            label="color"
            defaultValue={color}
            fullWidth
            onChange={handleChange}
            value={values.color}
        />
        <div> 
            </div>
            
</div>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose, submitValue} color="primary">
                Submit
            </Button>
            </DialogActions>
        </Dialog>

        </div>
    )
}

export default  Edit