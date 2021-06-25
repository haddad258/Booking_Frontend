import React ,{useState} from 'react'
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
import { FormLabel, FormGroup } from '@material-ui/core';

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

const Addtransport = (props) => {
    const {privileges} = props
    const [open1, setOpen1] = React.useState(false);
    
    const [values, setValues] = useState([]);
    const [state,setState] = React.useState();
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
      
    
      
      
    
     const handleChanges= event => {
      if (event.target.files && event.target.files[0])
      {
       setSelectedFile(
       
URL.createObjectURL(event.target.files[0])
     )
     
     setIsFilePicked(true);
     setValues({
       ...values,
       [event.target.id]: event.target.value,
   });
   }
    }
       
     
        // Request made to the backend api 
        // Send formData object
        const handleChange = event => {
          setValues({
              ...values,
              [event.target.id]: event.target.value,
              
          });
        } 

    
    const submitValue = async () => {
      
       
       

       axios.post("http://localhost:3002/forResrvation/add/equipment", values).then(response => response.status)
            .then((status) => {
               alert(JSON.stringify({"User Added": values.image}))
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
            
            className="m-2"
            variant="outlined"
            color="primary"
            onClick={handleClickOpen1}>
            Add NEW Equipment
            </Button>

        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add NEW Equipment</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To add a new Equipment to this website, please enter all required fields here.
                <div>
                <input id="image" type="file"  onChange={handleChanges} value={values.image} />
            <img  src={selectedFile} />
            
          </div>
          </DialogContentText>
               
        
                <TextField
                    autoFocus
                    margin="dense"
                    id="price"
                    label="price"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.price}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    label="description"

                    fullWidth
                    onChange={handleChange}
                    value={values.description}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="brand"
                    label="brand"

                    fullWidth
                    onChange={handleChange}
                    value={values.brand}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="color"
                    label="color"

                    fullWidth
                    onChange={handleChange}
                    value={values.color}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="type"

                    fullWidth
                    onChange={handleChange}
                    value={values.name}
                />
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