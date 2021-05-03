import React ,{useState} from 'react'

import {
    TextField,
  } from '@material-ui/core';

const SelectChamp = (props) => {
    const {obj, label, name, value, handleChange } = props

    return (


        <TextField
            fullWidth
            label={`Select ${label}`}
            margin="dense"
            name={name}
            onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            variant="outlined"
        >
        <option value="">Select One</option>
            {
                obj.map(item => <option value={item._id}>{item.name}</option>)
            }    
        

        </TextField>
    )
}

export default SelectChamp
