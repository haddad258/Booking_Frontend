import React ,{useState,useEffect} from 'react'
import axios from 'axios'

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
    List,
    ListItem,
    TextField,
    FormControl,
    ListItemText,
    Card,
  } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { FormLabel, FormGroup } from '@material-ui/core';
const API_URL = 'http://localhost:3002/booking/view/'


const Display = (props) => {
    var {imageRef,id} = props
    const [open1, setOpen1] = React.useState(false);
    
    const [values, setValues] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
        useEffect(() => {
  
            axios.get(API_URL+`${id}`).then((response)=>{
              
                  setIsLoaded(true);
      
          setItems(response.data.content);
            })
          }, [])
    
      const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };
   
if(items.length != 0)
{
    return (
        <div style={{ }}>
            <Button
            
            onClick={handleClickOpen1}>
            ...
            </Button>
           
        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">more</DialogTitle>
            <DialogContent>
            <DialogContentText>
                <div>
            <img   alt="..." src={process.env.PUBLIC_URL+ imageRef.replace("C:\\fakepath\\", "/")} style={{width:300, height:300}} className="p-3" />
            
          </div>
          {items.map(item   =>
          <div>
          <div>
            User:{item.firstName} {item.lastName}
            
          </div>
          <div>
            reserved from:{item.dateDebut}
            
          </div>
          <div>
          to:{item.dateFin}
          </div>
          </div>)}
          </DialogContentText>
        
       
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose1} color="primary">
                close
            </Button>
            </DialogActions>
        </Dialog>

        </div>
    )
}
else{
  return (
    <div style={{ }}>
        <Button
        
        onClick={handleClickOpen1}>
        ...
        </Button>
       
    <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">more</DialogTitle>
        <DialogContent>
        <DialogContentText>
            <div>
        <img   alt="..." src={process.env.PUBLIC_URL+ imageRef.replace("C:\\fakepath\\", "/")} style={{width:300, height:300}} className="p-3" />
        
      </div>
      
     
      <div>
        Not reserved
        
      </div>
     
      </DialogContentText>
    
   
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose1} color="primary">
            close
        </Button>
        </DialogActions>
    </Dialog>

    </div>
  )

}
}

export default  Display