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

const API_URL = 'http://localhost:3002/calendar'
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
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ]);
  var d = new Date();
  var date = d.getFullYear()+'-'+'0'+(d.getMonth()+1)+'-'+d.getDate();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var fullDate = date+' '+hours;
const [items, setItems] = useState([]);
 const classes = {

    header:{
        width:500,
      height:50,
      backgroundColor:"#F0F2F5",
      
    },
     container:{
        width:500,
      height:200,
      
     
    },
    footer:{
        width:500,
      height:100,
      backgroundColor:"#BCC0C4",
     
    },
    timeLine:{
        width:500,
      height:100,
      backgroundColor:"#F0F2F5",
     
    },
    dialogPaper: {
       width: '400px',
        height : '400px'
    },
   
    roomNumber:{
      height:30,width:"90%",
      borderRadius: 1,
      borderStyle: 'dashed',
      borderWidth: 1,
      borderColor: 'red',
    },
    roomName:{
      fontSize:15,fontWeight:'bold'
    },
    timeNow:{
      color: "#66bb6a",fontSize:10,fontWeight:'bold',
    },
    circle:{
      backgroundColor:"#FFF",borderRadius:1,
    },
    topic: {
      color: "#FFFFFF",fontSize:10,fontWeight:'bold'
    },
    nextBooking: {
      color: "##212121",fontWeight:'bold'
    },
    userName: {
      color: "#FFFFFF",fontSize:30,fontWeight:'bold'
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

  axios.get(API_URL+"?date="+`${date}`+"&hours="+`${hours}`).then((response)=>{
    
        setIsLoaded(true);

setItems(response.data.content);
  })
}, [])
   
  return (


    <Grid style={{width:500,height:500}}>
    
       {items.map(item   =>
 
      <Grid>
                     <Row style={classes.header}>
                    <Col style={classes.flexCenter}>          
        <h1 style={classes.roomName}>disponibilité des equipment</h1>
        {/* {("1"==="1") && <p>hello </p>} */}
                    </Col>
                    <Col style={classes.roomName}>
                      <h1 style={{...classes.roomName,textAlign: "right"}}>
                      <Clock format={'HH:mm:ss'} ticking={true} timezone={'TN/Pacific'} />
                      </h1>
                    </Col>
                  </Row>
   
                  
                  <Row style={{...classes.container,backgroundColor:item.color}}>
                  
                 <Grid >
                      
                      <Row style={classes.flexCenter}>
                       <h1 style={{...classes.userName,margin: "60px"}} >{item.disponible}</h1>
                      </Row>
                      { (item.disponible==="Reservé")  && <Row style={classes.flexCenter}>
                      <div style={{width:"600px",margin: "80px"}}>
      <div className="time-range">
				<b>Start Time:</b> {item.from}  <b>End Time:</b> {hours}
			</div>
      <div className="time-range-slider">
                        <TimeRangeSlider
                          disabled={false}
                          format={24}
                          maxValue={"23:59"}
                          minValue={"00:00"}
                          name={"time_range"}
                          onChangeStart={changeStartHandler}
                          onChangeComplete={changeCompleteHandler}
                          onChange={timeChangeHandler}
                          step={15}
                          value={value}/>
                
                        </div>
                        </div>
                      
                        
                      </Row>}
                      <Row style={{...classes.flexCenter,paddingHorizontal:50}}>
                        <Col size={25} style={{backgroundColor:"#BCC0C4",height:14}} h></Col><Col size={75} style={{backgroundColor:"white",height:14}}></Col>
                      </Row>
                    </Grid>
                  </Row>
                  <Row style={classes.footer}>
                    <Col style={{paddingTop:10}}>
                    <Grid style={{textAlign: "center"}}>
                      <Row><h1 style={{...classes.nextBooking , height:22,fontSize: 20 }}> {item.event}  </h1></Row>
                     {  (item.disponible==="Reservé")  && <Row><h1 style={{...classes.nextBooking , height:22,fontSize: 20 }}> {item.from} {item.to} </h1></Row>}
                    </Grid>
                    </Col>
                    <Col>
                    
                    <Grid style={{textAlign: "right"}}>

                   
                      <Col >            
                         <Reservation/>
                      </Col>
                     
                       </Grid>
                    </Col>
                    
                  </Row>
                  
                  <Row style={classes.timeLine}>
                   
              
                   <Grid style={{...classes.flexCenter, paddingHorizontal:40}}>
                   {times.map(time   =>{
                     console.log(item.heuredebut,time)
                      if((time >= item.heuredebut)&&(time<=item.heurefin)){
                        return(
                     <Col>
                     <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 10 }}>{time}</h1></Row>
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
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 12 }}>{time}</h1></Row>
                        <Grid container item xs={11} spacing={1} >
                   <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                        </Grid>
   
                        </Col>  
                      )

                    }})}
                    
                   </Grid>
                   
                   
                   
                  </Row>
                  </Grid>  )}
               
                </Grid>
  );

}
export default Room