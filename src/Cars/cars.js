import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import {RangeStepInput} from 'react-range-step-input';
import { Grid, Card, CardContent,
  CardHeader, Button, Paper } from '@material-ui/core';
import { format } from "date-fns";
import {DatePicker } from 'antd';
import { Menu, Switch, Divider,Radio } from 'antd';
import {
  MenuFoldOutlined
} from '@ant-design/icons';
import {Row,Col,Container} from 'reactstrap';
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import 'antd/dist/antd.css';
import 'antd/lib/date-picker/style/css'; 
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
  import { sizing } from '@material-ui/system';
  import { PageTitle } from '../layout-components';
  import { makeStyles } from "@material-ui/core/styles";
  import Time from './Time';

const API_URL = 'http://localhost:3002/forResrvation/list/transport_tools'
const API_URL2 = 'http://localhost:3002/forResrvation/listDispo/transport_tools'

const { SubMenu, ItemGroup } = Menu;
function Cars() {
  const useStyles = makeStyles((theme) => ({
    mainClass: {
      flexWrap: "wrap",
      display: "flex",
      "& > *": {
        height: theme.spacing(15),
        margin: theme.spacing(5),
        width: theme.spacing(15),
      },
    },
  }));
  
  const classes = {

   
    
    dialogPaper: {
       width: '100%',
        height : '100%'
    }
    
  
  };


    const [collapsed, setcollapsed] = useState(false);
  
    
    const toggleCollapsed = () => {
      setcollapsed(
        !collapsed
      );
    };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0, 4999]);
  const [date, setdate] = useState(new Date(), new Date());
  const [ok, setOk] = useState(false);
  var [idcar, setidcar] = useState("");
  const [categoryIds, setCategoryIds] = useState([]);
  const [star, setStar] = useState("");
  const [subs, setSubs] = useState([]);
  const [sub, setSub] = useState("");
  const [brands, setBrands] = useState([  "BMW",
  "peugeot",
  "mercedes",
  "ferrari",
  "clio"
]);
const [disp, setdisp] = useState([  "All",
"reservé",
"disponible",
"encours"

]);
const handleSlider = (e) => {
  

  // reset
  setdate("", "");
  setetat(e.target.value);
  setStar("");
  setSub("");
  setBrand("");
  setColor("");
  setShipping("");
  setTimeout(() => {
    setOk(!ok);
  }, 300);
};
const handletime = (value) => {
  

  // reset
  setPrice([0, 0]);
  setdate(value);
  setdispo("");
  setSub("");
  setBrand("");
  setColor("");
  setShipping("");
  setTimeout(() => {
    setOk(!ok);
  }, 300);
};
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [open1, setOpen1] = React.useState(false);
    const [brand, setBrand] = useState("");
    const [dispo, setdispo] = useState("");
    const [colors, setColors] = useState([
      "Black",
      "red",
      "grey",
      "White",
      "blue",
    ]);
    const [color, setColor] = useState("");
  const [shipping, setShipping] = useState("");  
  const [ value, setValue ] = useState(0);
    const [values, setValues] = useState([]);
    const [etat, setetat] = useState(2);
    const [endDate, setendDate] = useState(new Date());
    const handleChange = event => {
        setValues({
            ...values,
            
            [event.target.id]: event.target.value,
            
        });
    };
    const handleChanges = async (id) => {
      
          idcar =id
 
  };
  const handleChangess =async (id) => {
      
    idcar =id

};
const handledisp = (e) => {
  setStar("");
  setBrand("");
  setdispo(e.target.value);
  setShipping("");
  
};
  
  const handleBrand = (e) => {
    setPrice([0, 0]);
    setdate("", "");
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
    const showdisponibilit= () =>
    disp.map((d) => (
      <Radio
        key={d}
        value={d}
        name={d}
        checked={d === dispo}
        onChange={handledisp}
        className="pb-1 pl-4 pr-4"
      >
        {d}
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
    setdate("", "");
    setPrice([0, 0]);
    setCategoryIds([]);
    setdispo("");
    setBrand("");
    setColor(e.target.value);
    setShipping("");
 
  };


  const handleShippingchange = (e) => {
    setSub("");
    setdate("", "");
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    setBrand("");
    setColor("");
    setShipping(e.target.value);
    
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
              <Time id={idcar}/>
           
        </Dialog>
        </Grid>
        </Grid>
        <Grid item xs={3}
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
export default Cars