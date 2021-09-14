import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Button, Paper } from '@material-ui/core';

import {DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { format } from "date-fns";
import {
    FormControlLabel,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Checkbox,
    List,
    ListItem,
    TextField,
    FormControl,
    ListItemText,
   
  } from '@material-ui/core';
  const url = require('../cfg')()
const API_URL = url+'forResrvation/listDispo/all'


function Cars(props) {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [open1, setOpen1] = React.useState(false);
    
    const [values, setValues] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const handleChange = event => {
        setValues({
            ...values,
            
            [event.target.id]: event.target.value,
            
        });
    };
    const handleChanges = async (id) => {
      
          values.forReservation =id
 
  };
    const submitValue = async () => {
      
       

       axios.post(url+'booking/create', values).then(response => response.status)
            .then((status) => {
              
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
    
    useEffect(() => {
  
      axios.get(API_URL).then((response)=>{
        
            setIsLoaded(true);

    setItems(response.data.content);
      })
    }, [])
    const filtered = (props) => {
    items.filter(item => {
      return item.type.toLowerCase().includes(props.toLowerCase())
    }) 
  }
  
    if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement...</div>;
      } else {
  return (
    <Fragment>
        <Paper square elevation={2} className="app-page-title">
        <div>
         <p>type</p>
      <select name="sortValue" >
        <option value="All">All</option>
        <option value="Name">flight ticket</option>
        <option value="Name">movie ticket</option>
        <option value="Name">boat ticket</option>
        <option value="Name">train ticket</option>
           </select>
           
           </div>
           <div>
      <p>location</p>
      <input type="text" value ={props.inputValue}  onChange={props.petFilterOnChange}/>
      </div>
      <div>
      <p>destination</p>
      <input type="text" value ={props.inputValue}  onChange={props.petFilterOnChange}/>
      </div>
      
  
      <div>

        <p>To :  </p>
          
          <DatePicker
          
           
            onChange={handleChange}
            value={values.dateDebut} />
          
            </div>
            <div>
         <p htmlFor="date">from :</p>
        <DatePicker
          onChange={handleChange}
          value={values.dateFin}/> 
          
          </div>
          <div>
         
            
        <input
          type="submit"
    
          value="search"/> 
          </div>
         
     </Paper>     
    </Fragment>
  );
}
}
export default Cars