import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Button } from '@material-ui/core';
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
const API_URL = 'http://localhost:3002/forResrvation/list/equipment'


function Equipment() {
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
    
     

     axios.post('http://localhost:3002/booking/create', values).then(response => response.status)
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
  
  if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
return (
  <Fragment>
    <Grid container spacing={4}>
      {items.map(item   => (item.imageRef != null) ?
    
      <Grid item xs={12} sm={6} md={4}>
        <Card className="mb-4">
          <img alt="..." className="card-img-top" src={process.env.PUBLIC_URL+ item.imageRef.replace("C:\\fakepath\\", "/")} />
          <CardContent className="p-3">
            <h5 className="card-title font-weight-bold font-size-lg">
             TV
            </h5>
            <h5 className="card-text">
              {item.price} DNT
              </h5>
            <p className="card-text">
              {item.description}
            </p>
            
            <div style={{ }}>
          <Button
          
          className="m-2"
          variant="outlined"
          color="primary"
          onClick={handleChanges(item.id),handleClickOpen1}
          >
          reserve
          </Button>
          </div>
          </CardContent>
        </Card>
      </Grid>: null
      
      )}
          <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">reserve</DialogTitle>
          <DialogContent>
          <DialogContentText>
             
              
          </DialogContentText>
         
          <div className="App">
      <label htmlFor="date">Start Date</label>
        
        <input
        type="date"
        id="dateDebut"
          onChange={date => setStartDate(date)}
          onChange={handleChange}
          value={values.dateDebut} />
       <label htmlFor="date">End Date:</label>
      <input
        type="date"
        id="dateFin"
        min={format(endDate, "MMMM do, yyyy H:mma")}
        onChange={date => setendDate(date)} 
        onChange={handleChange}
        value={values.dateFin}/> 
        </div>
        <TextField
                  autoFocus
                  margin="dense"
                  id="addressMail"
                  label="address mail"

                  fullWidth
                  onChange={handleChange}
                  value={values.addressMail}
              />
              <TextField
                  autoFocus
                  margin="dense"
                  
                  fullWidth
                  
                  
              />

   
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose1} color="primary">
              Cancel
          </Button>
          <Button onClick={handleClose1, submitValue} color="primary">
              Reserve
          </Button>
          </DialogActions>
      </Dialog>
          

      
            
            
          
      </Grid>
  </Fragment>
);
}
}
export default Equipment