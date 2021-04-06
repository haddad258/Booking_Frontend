import React ,{useState} from 'react'

import {
    TextField,
  } from '@material-ui/core';

const Champ = (props) => {
    const {label, name, value, handleChange } = props

    return (
        <TextField
            fullWidth

            label={label}
            margin="dense"
            name={name}
            onChange={handleChange}
            // onChange={(e) => { console.log(e.target.value) }}
            required
            //value={value}
            variant="outlined"
        />
    )
}

export default Champ
