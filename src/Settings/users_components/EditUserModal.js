import React ,{useState} from 'react'
import faker from 'faker'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,    
    Button,
    TextField
  } from '@material-ui/core';


import cfg from '../../cfg';
const url = cfg.url;



const EditUserModal = (props) => {
    const {privileges, user} = props
    const [open, setOpen] = React.useState(false);
    
    const [values, setValues] = useState(user);
    const handleChange = event => {
        setValues({
            ...values,
            [event.target.id]: event.target.value,
            
        });
    };
    const submitValue = async () => {
       values.phonePro = parseInt(values.phonePro)
       values.phoneFix = parseInt(values.phoneFix)
       
       delete values.id
       
       axios.put(url + `users/${user.id}`, values).then(response => response.status)
            .then((status) => {
                alert(JSON.stringify({"User Updated": values.firstName,  "status ": status}))
                if (status === 200) setOpen(false)
            })

        //alert(JSON.stringify(values, null, 4))
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
                icon={['far', 'edit']}
                className="font-size-xxl"
                style={{color:"green" , cursor : "pointer"}}
                onClick={handleClickOpen}
              />

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">EDIT USER INFORMATIONS</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To update a user information to this website, please enter all required fields here.
                
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
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose, submitValue} color="primary">
                UPDATE
            </Button>
            </DialogActions>
        </Dialog>

        </div>
    )
}

export default  EditUserModal