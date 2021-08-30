import React, {Fragment,useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Row,Col,Container} from 'reactstrap';
import Clock from 'react-live-clock';

import axios from "axios";
import UpdateIcon from '@material-ui/icons/Update';
import TimeRangeSlider from 'react-time-range-slider';
import { time } from 'faker';
import { Button } from '@material-ui/core';
import Reservation from './reservation';

const API_URL = 'http://localhost:3002/calendartime'
function Room() {
  const [value, setvalue] = useState({
        start: "00:00",
        end: "23:59"
    });
   const  featureRef = React.useRef();
  const [end, setend] = useState("20:00");
  const [open1, setOpen1] = React.useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [values, setValues] = useState({});
  const [bgColor, setbgcolor] = useState("#43A047");
  const [times, settimes] = useState([
    "08:00:00",
    "09:00:00",
    "10:00:00",
    "11:00:00",
    "12:00:00",
    "13:00:00",
    "14:00:00",
    "15:00:00",
    "16:00:00",
    "17:00:00",
    "18:00:00",
    "19:00:00",
    "20:00:00",
  ]);
  var d = new Date();
  var date = d.getFullYear()+'-'+'0'+(d.getMonth()+1)+'-'+d.getDate();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var fullDate = date+' '+hours;
const [items, setItems] = useState([]);
 const classes = {

    header:{
      
      height:80,
      backgroundColor:"#F0F2F5",
      
    },
     container:{
      height:350,
      
     
    },
    footer:{
      height:150,
      backgroundColor:"#BCC0C4",
     
    },
    timeLine:{
      height:150,
      backgroundColor:"#F0F2F5",
     
    },
   
    roomNumber:{
      height:70,width:"90%",
      borderRadius: 1,
      borderStyle: 'dashed',
      borderWidth: 1,
      borderColor: 'red',
    },
    roomName:{
      fontSize:24,fontWeight:'bold'
    },
    timeNow:{
      color: "#66bb6a",fontSize:22,fontWeight:'bold',
    },
    circle:{
      backgroundColor:"#FFF",borderRadius:1,
    },
    topic: {
      color: "#FFFFFF",fontSize:24,fontWeight:'bold'
    },
    nextBooking: {
      color: "##212121",fontWeight:'bold'
    },
    userName: {
      color: "#FFFFFF",fontSize:80,fontWeight:'bold'
    },
    half:{
      height:8,margin:2
    },
   
    close: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
    flexCenter:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    }
  };
 const changeStartHandler=(time) =>{
    console.log("Start Handler Called", time);
};

const timeChangeHandler=(time) =>{
    setvalue(time);
}
const colorChangeHandler=() =>{
  setbgcolor("#C62828");
}


const changeCompleteHandler=(time) =>{
    console.log("Complete Handler Called", time);
}

useEffect(() => {

  axios.get(API_URL+"?date="+`${date}`).then((response)=>{
    
        setIsLoaded(true);

setItems(response.data.content);
  })
}, [])
   
  return (


    <Fragment>
    
       {items.map(item   =>
                 
                  <Row style={classes.timeLine}>
                   
              
                   <Grid style={{...classes.flexCenter, paddingHorizontal:40}}>
                   {times.map(time   =>{
                     console.log(item.heuredebut,time)
                      if((time >= item.heuredebut)&&(time<=item.heurefin)){
                        return(
                     <Col>
                     <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 20 }}>{time}</h1></Row>
                     {(time==item.heurefin)&&<Grid container item xs={11} spacing={1} >
                     { (item.x<=6)  && <Grid item md={item.x} xs={12} style={{backgroundColor:"red"} }> </Grid>}{ (item.x===0)  &&<Grid item md={6} xs={12} style={{backgroundColor:item.color1} }> </Grid>}<Grid item md={6} xs={12}  style={{backgroundColor:item.color1} }></Grid>{ (item.x>=6)  &&<Grid item md={12-item.x} xs={12}  style={{backgroundColor:"red"} }></Grid>}
                     </Grid>}
                     {(time==item.heuredebut)&&<Grid container item xs={11} spacing={1} >
                     { (item.x<=6)  &&<Grid item md={item.x} xs={12} style={{backgroundColor:"green"} }> </Grid>}{ (item.x===0)  &&<Grid item md={6} xs={12} style={{backgroundColor:item.color1} }> </Grid>}<Grid item md={6} xs={12}  style={{backgroundColor:item.color1} }></Grid>{ (item.x>=6)  &&<Grid item md={12-item.x} xs={12}  style={{backgroundColor:"red"} }></Grid>}
                     </Grid>}
                     </Col>)}
                    else{
                      return(
                        <Col>
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 20 }}>{time}</h1></Row>
                        <Grid container item xs={11} spacing={1} >
                   <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                        </Grid>
   
                        </Col>  
                      )

                    }})}
                    
                   </Grid>
                   
                   
                   
                  </Row>
                   )}
               
                </Fragment>
  );

}
export default Room