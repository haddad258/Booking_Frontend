import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import {RangeStepInput} from 'react-range-step-input';
import { Grid, Card, CardContent,
  CardHeader, Button, Paper } from '@material-ui/core';
import { format } from "date-fns";
import {DatePicker } from 'antd';
import { Menu, Slider, Checkbox, Radio } from "antd";
import Time from './Time';
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
  import { green, red } from '@material-ui/core/colors';
  import { sizing } from '@material-ui/system';
  import { PageTitle } from '../layout-components';
  import { makeStyles } from "@material-ui/core/styles";
const API_URL = 'http://localhost:3002/forResrvation/list/equipment'

const { SubMenu, ItemGroup } = Menu;
function Equipment() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [open1, setOpen1] = React.useState(false);
  const [price, setPrice] = useState([0, 4999]);
  const [values, setValues] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  const [ok, setOk] = useState(false);
  const [color_black, setcolor_black] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [star, setStar] = useState("");
  const [subs, setSubs] = useState([]);
  const [sub, setSub] = useState("");
  const [brands, setBrands] = useState([  "samsung",
  "LG",
  "apple",
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
 
const classes = {

   
    
  dialogPaper: {
     width: '100%',
      height : '100%'
  }
} 

 
    const [brand, setBrand] = useState("");
    const [colors, setColors] = useState([
      "black",
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
  const handleClose1 = () => {
    setOpen1(false);
  };
  let bgColor =color_black ? "green" : "red"
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
    <Grid container spacing={3}>
      <Grid item xs={9}>
      <Grid container spacing={4}>
      {items.map(item   => {
          if(((item.price >price[0])&&(item.price <price[1]))||(item.brand ==brand)||(item.color ==color)) {  
        return(
    
      <Grid item xs={12} sm={6} md={4}>
        <Card className="mb-4">
          <img alt="..." className="card-img-top" src={process.env.PUBLIC_URL+ item.imageRef.replace("C:\\fakepath\\", "/")} />
          <CardContent className="p-3">
            <h5 className="card-title font-weight-bold font-size-lg">
             {item.name}
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
          <Button  style={{ backgroundColor: green[500]}}>in stock</Button>
          </div>
          </CardContent>
        </Card>
      </Grid> );
    }  
      }
      
      )}
         <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="form-dialog-title"
            classes={{ paper : classes.dialogPaper}} >
              <Time/>
      </Dialog>
      </Grid>
        </Grid>
        <Grid item xs={3}style={{backgroundColor:"grey"}}>
        <div className="container-fluid" >
      <div className="row">
        <div className="col-md-3 pt-2">
          <h4>Filter</h4>
          <hr />

          <Menu
          style={{backgroundColor:"grey"}}
            defaultOpenKeys={["1", "2", "3", "4", "5", "6", "7"]}
            mode="inline"
          >
            {/* price */}
            <SubMenu
              key="1"
              title={
                <span className="h6">
                  <DollarOutlined /> Price
                </span>
              }
            >
              <div>
                <Slider
                  className="ml-4 mr-4"
                  tipFormatter={(v) => `$${v}`}
                  range
                  value={price}
                  onChange={handleSlider}
                  max="4999"
                />
              </div>
            </SubMenu>

            

            {/* brands */}
            <SubMenu
              key="5"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Brands
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showBrands()}
              </div>
            </SubMenu>

            {/* colors */}
            <SubMenu
              key="6"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Colors
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showColors()}
              </div>
            </SubMenu>

            {/* shipping */}
            <SubMenu
              key="7"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Shipping
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showShipping()}
              </div>
            </SubMenu>
          </Menu>
        </div>

        
      </div>
    </div>
       
      </Grid>
      </Grid> 

      
            
            
          
     

      
  </Fragment>
);
}
}
export default Equipment