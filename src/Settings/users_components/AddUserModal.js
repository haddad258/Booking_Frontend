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

const url = require('../../cfg')()
const AddUserModal = (props) => {
    const {privileges} = props
    const [open1, setOpen1] = React.useState(false);
    
    const [values, setValues] = useState([]);
    const handleChange = event => {
        setValues({
            ...values,
            "approved" : 1,
            "avatar":  faker.image.avatar(),
            [event.target.id]: event.target.value,
            
        });
    };
    const submitValue = async () => {
       values.phonePro = parseInt(values.phonePro)
       values.phoneFix = parseInt(values.phoneFix)
       
       

       axios.post(url + `/users/add`, values).then(response => response.status)
            .then((status) => {
               // alert(JSON.stringify({"User Added": values.firstName,  "status ": status}))
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
            Add NEW USER
            </Button>

        <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add NEW USER</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To add a new user to this website, please enter all required fields here.
                
            </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.firstName}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    
                    fullWidth
                    onChange={handleChange}
                    value={values.lastName}
                />
        
                <TextField
                    autoFocus
                    margin="dense"
                    id="addressMail"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={handleChange}
                    value={values.addressMail}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="phonePro"
                    label="Phone Pro"

                    fullWidth
                    onChange={handleChange}
                    value={values.phonePro}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="phoneFix"
                    label="Phone Fix"

                    fullWidth
                    onChange={handleChange}
                    value={values.phoneFix}
                />
                <div style={{height:10}}></div>
                <TextField
                    fullWidth
                    label="Select Role"
                    margin="dense"
                    name="privilege"
                    id="privilege"
                    onChange={handleChange}
                    // onChange={(e) => { setIdGroup(e.target.value) }}
                    required
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}

                    variant="outlined"
                >

                    {privileges.map((privilege) => (
                        <option value={privilege.id}>{privilege.name} : {privilege.description}</option>
                    ))}

                </TextField>
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

export default  AddUserModal