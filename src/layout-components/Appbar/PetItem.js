import React from 'react'
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
const PetItem = (props) => {
 
   const {name, imageRef} = props.item

  return(
   
    <Grid container spacing={4}>
    <Grid item xs={12} sm={6} md={4}>
    <div className="clear"></div>
     <div className="dog-item" onClick={() => props.handlePetView(props.item)}>
     
        <Card className="mb-4">
          <img alt="..." className="card-img-top" src={process.env.PUBLIC_URL+ imageRef.replace("C:\\fakepath\\", "/")} />
          <CardContent className="p-3">
            <h5 className="card-title font-weight-bold font-size-lg">
            {name}
            </h5>
            
            
            <div style={{ }}>
          <Button
          
          className="m-2"
          variant="outlined"
          color="primary"
          
          >
          reserve
          </Button>
          </div>
          </CardContent>
        </Card>
      
        
        </div> 
        </Grid>
      
      </Grid>
   
    );

}
export default PetItem