import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import {RangeStepInput} from 'react-range-step-input';
import { Grid, Card, CardContent,
  CardHeader, Button, Paper } from '@material-ui/core';
import { format } from "date-fns";
import {DatePicker } from 'antd';
import { Menu, Slider, Checkbox, Radio } from "antd";

import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import 'antd/dist/antd.css';
import Box from '@material-ui/core/Box';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    FormControlLabel,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,

    List,
    ListItem,
    TextField,
    FormControl,
    ListItemText,
   
  } from '@material-ui/core';
const API_URL = 'http://localhost:3002/forResrvation/listDispo/all'
const API_URL1 = 'http://localhost:3002/forResrvation/listDispo/home'

const API_URL2 = 'http://localhost:3002/forResrvation/listDispo/transport_tools'
const { SubMenu, ItemGroup } = Menu;
function Cars(props) {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [open1, setOpen1] = React.useState(false);
    const [price, setPrice] = useState([0, 4999]);
    const [values, setValues] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [ok, setOk] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [star, setStar] = useState("");
  const [subs, setSubs] = useState([]);
  const [sub, setSub] = useState("");
  const [brands, setBrands] = useState([  "BMW",
  "peugeot",
  "mercedes",
]);
const handleSlider = (value) => {
  

  // reset

  setPrice(value);
  setStar("");
  setSub("");
  setBrand("");
  setColor("");
  setShipping("");
  setTimeout(() => {
    setOk(!ok);
  }, 300);
};
 
   

 
    const [brand, setBrand] = useState("");
    const [colors, setColors] = useState([
      "Black",
      "red",
      "gray",
      "White",
      "blue",
    ]);
    const [color, setColor] = useState("");
  const [shipping, setShipping] = useState("");  
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
    const handleBrand = (e) => {
      setPrice([0, 0]);
      setStar("");
      setColor("");
      setBrand(e.target.value);
      setShipping("");
      
    };
    const showBrands = () =>
      brands.map((b) => (
        <Radio
          key={b}
          value={b}
          name={b}
          checked={b === brand}
          onChange={handleBrand}
          className="pb-1 pl-4 pr-4"
        >
          {b}
        </Radio>
      ));
  
    // 8. show products based on color
    const showColors = () =>
      colors.map((c) => (
        <Radio
          key={c}
          value={c}
          name={c}
          checked={c === color}
          onChange={handleColor}
          className="pb-1 pl-4 pr-4"
        >
          {c}
        </Radio>
      ));
  
    const handleColor = (e) => {
      setSub("");
      
      setPrice([0, 0]);
      setCategoryIds([]);
      setStar("");
      setBrand("");
      setColor(e.target.value);
      setShipping("");
   
    };
  
    // 9. show products based on shipping yes/no
    const showShipping = () => (
      <>
        <Checkbox
          className="pb-2 pl-4 pr-4"
          onChange={handleShippingchange}
          value="Yes"
          checked={shipping === "Yes"}
        >
          Yes
        </Checkbox>
  
        <Checkbox
          className="pb-2 pl-4 pr-4"
          onChange={handleShippingchange}
          value="No"
          checked={shipping === "No"}
        >
          No
        </Checkbox>
      </>
    );
  
    const handleShippingchange = (e) => {
      setSub("");
      
      setPrice([0, 0]);
      setCategoryIds([]);
      setStar("");
      setBrand("");
      setColor("");
      setShipping(e.target.value);
      
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
     
     <Grid container spacing={3}>
      <Grid item xs={9}>
      <Grid container spacing={4}>
        {items.map(item   => {
            
        return(
      <Grid item xs={12} sm={6} md={4}>
        <Card className="mb-4"style={{height:410}}>
          <img alt="..." className="card-img-top" src={process.env.PUBLIC_URL+ item.imageRef.replace("C:\\fakepath\\", "/")} style={{width:150, height:150}}/>
          <CardContent className="p-3">
            <h5 className="card-title font-weight-bold font-size-lg">
            {item.name}
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
      </Grid>
        );
      }  
        
      
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
        </Grid>
        
      </Grid>
    </Fragment>
  );
}
}
export default Cars