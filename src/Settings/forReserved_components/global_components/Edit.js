import React ,{useState} from 'react'
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
import Champ from './Champ'
import SelectChamp from './SelectChamp';

  const url = require('../../../cfg')()



 

const Edit = (props) => {
    const {target,id, buildings, zones, floors } = props
    const [open, setOpen] = React.useState(false);
    
    const [values, setValues] = useState({});
    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
            
        });
    };
    const submitValue = async () => {
        alert(JSON.stringify(values))
   
        axios.put(url + `${target}/${id}`, values).then(response => response.status)
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
        <EditIcon onClick={handleClickOpen} color="primary" style={{color:"green", position: "absolute", top: 10, right: 60, cursor: "pointer" }} />
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">EDIT FORM</DialogTitle>
            <DialogContent>
            <DialogContentText>
                please enter all required fields here.
                
            </DialogContentText>

                <Grid container spacing={3} >
                    <Champ label={"Name"} name={"name"} handleChange={handleChange} />       
                {(target === "buildings") ? <>
                    
                    <Champ label={"Address"} name={"address"} handleChange={handleChange} />  
                    <Grid item md={6} xs={12} >
                    <Champ label={"Country"} name={"country"} handleChange={handleChange} />
                    <Champ label={"ZIP Code"} name={"zipcode"} handleChange={handleChange} />
                    </Grid>
                    <Grid item md={6} xs={12} >
                    
                    <Champ label={"City"} name={"city"} handleChange={handleChange} />
                    <Champ label={"Position"} name={"position"} handleChange={handleChange} />
                    </Grid>
                    <Champ label={"Contact"} name={"contact"} handleChange={handleChange} />
                </> : null}
                {(target === "zones") ? <SelectChamp label={"Building"} name={"building"} handleChange={handleChange} obj={buildings} />: null}
                {(target === "floors") ? <>
                    <Grid item md={6} xs={12} >
                    <SelectChamp label={"Building"} name={"building"} handleChange={handleChange} obj={buildings} />
                    </Grid>
                    <Grid item md={6} xs={12} >
                    <SelectChamp label={"Zone"} name={"zone"} handleChange={handleChange} obj={zones} />
                    </Grid>
                    </>: null}

                {(target === "rooms") ? <>
                    <Grid item md={4} xs={12} >
                    <SelectChamp label={"Building"} name={"building"} handleChange={handleChange} obj={buildings} />
                    </Grid>
                    <Grid item md={4} xs={12} >
                    <SelectChamp label={"Zone"} name={"zone"} handleChange={handleChange} obj={zones} />
                    </Grid>
                    <Grid item md={4} xs={12} >
                    <SelectChamp label={"Floor"} name={"floor"} handleChange={handleChange} obj={floors} />
                    </Grid>
                </>: null}
                <Grid item md={6} xs={12} >
                </Grid>
                   
                </Grid>


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