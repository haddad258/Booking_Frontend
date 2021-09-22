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
  MenuFoldOutlined
} from '@ant-design/icons';
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
  const url = require('../cfg')()
const API_URL = url+'forResrvation/list/equipment'


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
  const [etat, setetat] = useState(2);
  const [ok, setOk] = useState(false);
  const [color_black, setcolor_black] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [star, setStar] = useState("");
  const [dispo, setdispo] = useState("");
  const [disp, setdisp] = useState([  "All:2",
  "reservé:1",
  "disponible:0",
  "encours:1"
  
  ]);
  const [sub, setSub] = useState("");
  const [brands, setBrands] = useState([  "samsung",
  "LG",
  "apple",
]);

const handleSlider = (value) => {
  

  // reset

  setPrice(value);
  setdispo("");
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
    
     

     axios.post(url+'booking/create', values).then(response => response.status)
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
    setdispo("");
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
    const showdisponibilit= () =>
    disp.map((d) => (
      <Radio
        key={d.split(/[.:]/)[1]}
        value={d.split(/[.:]/)[1]}
        name={d.split(/[.:]/)[1]}
        checked={d === dispo}
        onChange={handledisp}
        className="pb-1 pl-4 pr-4"
      >
        {d.split(/[.:]/)[0]}
      </Radio>
    ));
    const handledisp = (e) => {
      setStar("");
      setBrand("");
      setdispo(e.target.value);
      setShipping("");
      
    };
  const handleColor = (e) => {
    setSub("");
    
    setPrice([0, 0]);
    setCategoryIds([]);
    setdispo("");
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
            {items.map((item)   =>{
              if((item.brand ==brand)||((item.status == dispo))||(item.color ==color)) {  
            return(
          <Grid item xs={12} sm={6} md={4}>
              <Card className="mb-4">
                <img alt="..." className="card-img-top" src={process.env.PUBLIC_URL+ item.imageRef.replace("C:\\fakepath\\", "/")} style={{width:150, height:150}} />
                <CardContent className="p-3">
                  <h5 className="card-title font-weight-bold font-size-lg">
                  {item.brand}
                  </h5>
                  <p className="card-text">
                {item.status==0 && <p style={{ color: 'green' }}>ouverte</p>}
                {item.status==1 && <p style={{ color: 'red' }}>confirmé</p>}
                {item.status==2 && <p style={{ color: 'gold' }}>encours</p>}
                </p>
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
          }
            )}
                <Dialog
                open={open1}
                onClose={handleClose1}
                aria-labelledby="form-dialog-title"
                classes={{ paper : classes.dialogPaper}} >
                  <Time id={values.forReservation}/>
               
            </Dialog>
            </Grid>
            </Grid>
            <Grid item xs={3}
            className="col-md-5"
           >
            <div className="container-fluid" >
          <div className="row">
          <div style={{ width: 256 }}>
       
        
       <Menu
         defaultSelectedKeys={['1']}
         defaultOpenKeys={['sub1','sub2','sub3','sub0']}
         mode="inline"
         style={{ backgroundColor: "#f5f5f5" }}
        
       >
         <SubMenu key="sub0" icon={<MenuFoldOutlined />} title="Filtre">
         
        
         <SubMenu key="sub1" icon={<DownSquareOutlined />} title="disponibilité">
         <div style={{ maringTop: "-10px" }} className="pr-5" >
               {showdisponibilit()}
             </div>
          
         </SubMenu>
         <SubMenu key="sub2" icon={<DownSquareOutlined />} title="Couleurs">
         <div style={{ maringTop: "-10px" }} className="pr-5">
               {showColors()}
             </div>
          
         </SubMenu>
         <SubMenu key="sub3" icon={<DownSquareOutlined />} title="Brands">
         <div style={{ maringTop: "-10px" }} className="pr-5">
               {showBrands()}
             </div>
          
         </SubMenu>
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