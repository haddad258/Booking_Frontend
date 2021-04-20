import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Button } from '@material-ui/core';
const API_URL = 'http://localhost:3002/forResrvation/list/home'


function Hotels() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    
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
        {items.map(item   =>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <img alt="..." className="card-img-top" src={item.imageRef} />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                Card title
              </h5>
              <p className="card-text">
                {item.description}
              </p>
              <Button color="primary" variant="contained">
                Go somewhere
              </Button>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
        )}
    </Fragment>
  );
}
}
export default Hotels