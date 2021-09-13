import React, {Fragment,useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Row,Col,Container} from 'reactstrap';
import Clock from 'react-live-clock';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import axios from "axios";
import TimeRangeSlider from 'react-time-range-slider';

import Reservation from './reservation';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
const url = require('../../../src/cfg')()
const API_URL = url+'forResrvation/calendar/transport_tools'
const API_URL = 'http://localhost:3002/calendar/transport_tools'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
function Car(props) {
  var {id} = props
  const classe = useStyles();
  const [value, setvalue] = useState({
        start: "00:00",
        end: "23:59"
    });
    const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [open2, setOpen2] = useState(true);

  const handleClick1 = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = useState(true);

  const handleClick2 = () => {
    setOpen3(!open3);
  };
  const yearn = (new Date()).getFullYear();
const years = Array.from(new Array(20),(val, index) => index + yearn);
var getDaysArray = function(year, month) {
  var monthIndex = month - 1; // 0..11 instead of 1..12
  var date = new Date(year, monthIndex, 1);
  var result = [];
  while (date.getMonth() == monthIndex) {
    result.push(date.getDate() );
    date.setDate(date.getDate() + 1);
  }
  return result;
}
  const [end, setend] = useState("20:00");
  const [idcar, setidcar] =useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [values, setValues] = useState({});
  const [bgColor, setbgcolor] = useState("#43A047");
  const [mois, setmois] = useState([
    "Janvier:01 ",
    "Fervier:02",
    "Mars:03",
    "Avril:04",
    "Mai:05",
    "Juin:06",
    "Juillet:07",
    "Aout:08",
    "Septembre:09",
    "Octobre:10",
    "Novembre:11",
    "Decembre:11",
  ]);
  const [jours, setjours] = useState([
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ]);
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
  var y = d.getFullYear();
  var mm = (d.getMonth()+1);
  var dd = d.getDate();
  
  if( mm < 10 ){ mm = '0' + mm; }
  if( dd < 10 ){ dd = '0' + dd; }
  var hours = h + ':' + m + ':' + s
  var dat = y+'-'+mm+'-'+dd;
 
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  if( h < 10 ){ h = '0' + h; }
  if( m < 10 ){ m = '0' + m; }
  if( s < 10 ){ s = '0' + s; }
  var hours = h + ':' + m + ':' + s

const [items, setItems] = useState([]);
const [date, setdate] = useState(dat);
const [moiss, setmoiss] = useState(mm);
const [year, setyear] = useState(y);
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
const idChangeHandler=(id) =>{
  setidcar(id);
}
const timeChangeHandler=(time) =>{
    setvalue(time);
}
const colorChangeHandler=() =>{
  setbgcolor("#C62828");
}
const change=event =>{
  setmoiss(
    event.target.value,  
);
}
const changes=event =>{
  setyear(
    event.target.value,  
);
}

const changeCompleteHandler=(time) =>{
    console.log("Complete Handler Called", time);
}
const handleChange = event => {
  setdate(
      event.target.value,  
  );
 
};

useEffect(() => {
  const fetchData = async () => {
    const result = await axios(API_URL+"?date="+`${date}`+"&hours="+`${hours}`+"&id="+`${id}`)
    //console.log(API_URL+"?date="+`${date}`+"&hours="+`${hours}`)
        setIsLoaded(true);

setItems(result.data.content);

  };
  fetchData();
  
}, [date])
console.log(id)
   
  return (


    <Grid style={{width:500,height:500}}>
    
       {items.map(item   =>
 
      <Grid>
                     <Row style={classes.header}>
                    <Col style={classes.flexCenter}>          
        <h1 style={classes.roomName}>disponibilité des voitures </h1>
        {/* {("1"==="1") && <p>hello </p>} */}
        </Col>
                    <Col style={classes.roomName}>
                    <h1 style={{...classes.roomName,textAlign: "right"}}>
                      <Clock format={'HH:mm:ss'} ticking={true} />
                      </h1>
                    </Col>
                  </Row>
   
                  
                 
                  <Row style={{...classes.container,backgroundColor:item.color}}>
                  
                 <Grid >
                      
                      <Row style={{...classes.flexCenter,marginInline:250}}>
                       <h1 style={{...classes.userName,margin: "60px"}} >{item.disponible}</h1>
                      </Row>
                      { (item.disponible==="Reservé")  && 
                      <div>
                        <p><span class="gauche">{item.hd}</span><span class="droite">{item.hf}</span></p>
                      <Row style={{...classes.flexCenter,paddingHorizontal:50,marginInline:60}}>

                      
                       {item.heurereste.map((heur,index)   =>{
                         if((heur <= hours)){
                          console.log(item.xd[index])
                  return(
                      <Col>
                     
                      {(item.xd[index] == 0 )&&<Row >
                       
                       <Col item sm={6} xs={6} style={{backgroundColor:"#BCC0C4",height:14}} ></Col><Col item sm={6} xs={6} style={{backgroundColor:"#BCC0C4",height:14}}></Col>
                      
                     </Row>}
                     {(item.xd[index] != 0 )&& <Row >
                       
                       <Col item md={11-item.xd[index]} xs={12} style={{backgroundColor:"#BCC0C4",height:14}} ></Col><Col item md={item.xd[index]} xs={12} style={{backgroundColor:"white",height:14}}></Col>
                      
                     </Row>}
                      </Col>
                  )}
                  else{
                    return(
                      <Col>
                      <Row >
                        <Col item sm={6} xs={6} style={{backgroundColor:"white",height:14}} ></Col><Col item sm={6} xs={6} style={{backgroundColor:"white",height:14}}></Col>
                        
                      </Row>
                      </Col>
                    )

                  }
                      })}
                      </Row>
                      </div>  
                     }
                     
                    </Grid>
                  </Row>
                  <Row style={classes.footer}>
                    <Col style={{paddingTop:10,marginInline:250}}>
                    <Grid style={{textAlign: "center"}}>
                      <Row><h1 style={{...classes.nextBooking , height:22,fontSize: 20 }}> {item.event}  </h1></Row>
                     {/* {(item.disponible==="Reservé")  && <Row><h1 style={{...classes.nextBooking , height:22,fontSize: 20 }}> {item.date} </h1></Row>} */}
                    </Grid>
                    </Col>
                    <Col>
                    
                    <Grid style={{textAlign: "right"}}>

                   
                      <Col >            
                         <Reservation />
                      </Col>
                     
                       </Grid>
                    </Col>
                    
                  </Row>
                  
                  <Row style={classes.timeLine}>
                    <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        Temps de reservation
                      </ListSubheader>
                    }
                  
                  >
                  <ListItem button onClick={(e)=>handleClick(e)}>
                  <ListItemText primary="disponibilité de heures pour la date" />
                  <input
                  type="date"
                  onChange={(e)=>handleChange(e)}
                  value={date} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid style={{...classes.flexCenter, paddingHorizontal:40}}>
                   {times.map(time   =>{
                    // console.log(date,item.datedebut,item.datedebut.find(element => (element == date)))
                   if(item.datetimeline.find(element =>( (element.split(/[.,]/)[0] <= date)&&(element.split(/[.,]/)[1] >= date)&&(element.split(/[.,]/)[0] == element.split(/[.,]/)[1] )))!=undefined){
                    if(((item.to.find(element => element >= time)!=undefined))&&((item.from[item.to.findIndex(element => element >= time)].split(/[.:]/))[0] <= (time.split(/[.:]/))[0])){
                      console.log("bilel1",item.datetimeline.find(element => (element.split(/[.,]/)[0] <= date)))
                      return(
                     <Col>
                     <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{time.split(/[.:]/)[0]+":"+time.split(/[.:]/)[1]}</h1></Row>
                     {(item.to.find(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])!=undefined)&&<Grid container item xs={12} spacing={1} >
                     {(item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)  &&  <Grid item md={10-item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12} style={{backgroundColor:"red"} }> </Grid>}{(item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)&&<Grid item md={item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12}  style={{backgroundColor:bgColor} }></Grid>}{ (item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]==0)  &&<Grid item md={12} xs={12} style={{backgroundColor:"red"} }> </Grid>}
                     </Grid>}
                     {(item.from.find(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])!=undefined)&&<Grid container item xs={12} spacing={1} >
                     { (item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)  &&<Grid item md={10-item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12} style={{backgroundColor:bgColor} }> </Grid>}{(item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)&&<Grid item md={item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12}  style={{backgroundColor:"red"} }></Grid>}{ (item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]==0)  &&<Grid item md={item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12} style={{backgroundColor:"red"} }> </Grid>}
                     </Grid>}
                     {(item.to.find(element => (element.split(/[.:]/))[0] > (time.split(/[.:]/))[0])!=undefined)&&(item.from[item.to.findIndex(element => (element.split(/[.:]/))[0]> (time.split(/[.:]/))[0])]<=(time.split(/[.:]/))[0])&&<Grid container item xs={12} spacing={1} >
                     <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
                     </Grid>}
                     </Col>)}
                    else{
                      return(
                        <Col>
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{time.split(/[.:]/)[0]+":"+time.split(/[.:]/)[1]}</h1></Row>
                        <Grid container item xs={12} spacing={1} >
                   <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                        </Grid>
   
                        </Col>  
                      )

                    }}

                    else 
                    {console.log("bilel",item.datetimeline.findIndex(element => (element.split(/[.,]/)[1] == date)),item.to[item.datetimeline.findIndex(element => (element.split(/[.,]/)[1] == date))])
                      if((item.datetimeline.find(element =>( (element.split(/[.,]/)[0] <= date)&&(element.split(/[.,]/)[1] >= date)&&(element.split(/[.,]/)[0] != element.split(/[.,]/)[1] )))!=undefined)) {
                      console.log("az here 1",item.from[item.datetimeline.findIndex(element => element.split(/[.,]/)[0] == date)] <= time)
                      if((item.datetimeline.find(element =>( (element.split(/[.,]/)[0] == date)))!=undefined)&&(item.from[item.datetimeline.findIndex(element => element.split(/[.,]/)[0] == date)] <= time)){ 
                        return(
                          <Col>
                          <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{time.split(/[.:]/)[0]+":"+time.split(/[.:]/)[1]}</h1></Row>
    
                          {(item.from.find(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])!=undefined)&&<Grid container item xs={12} spacing={1} >
                          { (item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)  &&<Grid item md={10-item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12} style={{backgroundColor:bgColor} }> </Grid>}{(item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)&&<Grid item md={item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12}  style={{backgroundColor:"red"} }></Grid>}{ (item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]==0)  &&<Grid item md={item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12} style={{backgroundColor:"red"} }> </Grid>}
                          </Grid>}
                          {(item.from[item.datetimeline.findIndex(element => element.split(/[.,]/)[0] == date)] <= time)&&<Grid container item xs={12} spacing={1} >
                          <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
                          </Grid>}
                          
                          </Col>)}
                          if((item.to[item.datetimeline.findIndex(element => element.split(/[.,]/)[1] == date)] >= time)){ 
                            console.log("here4")
                            return(
                              <Col>
                              <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{time.split(/[.:]/)[0]+":"+time.split(/[.:]/)[1]}</h1></Row>
        
                              {(item.to.find(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])!=undefined)&&<Grid container item xs={12} spacing={1} >
                              {(item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)  &&  <Grid item md={10-item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12} style={{backgroundColor:"red"} }> </Grid>}{(item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)&&<Grid item md={item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12}  style={{backgroundColor:bgColor} }></Grid>}{ (item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]==0)  &&<Grid item md={12} xs={12} style={{backgroundColor:"red"} }> </Grid>}
                              </Grid>}
                              {(item.to[item.datetimeline.findIndex(element => element.split(/[.,]/)[1] == date)] >= time)&&<Grid container item xs={12} spacing={1} >
                              <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
                              </Grid>}
                              
                              </Col>)}
                      else {
                        console.log((item.from[item.datetimeline.findIndex(element => element.split(/[.,]/)[0] > date)] <= time)&&(item.from[item.datetimeline.findIndex(element => element.split(/[.,]/)[0] < date)] <= time),"azhar here2", (item.datetimeline.find(element =>( (element.split(/[.,]/)[1] == date)))!=undefined)
                        )
                        return(
                          <Col>
                          <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{time.split(/[.:]/)[0]+":"+time.split(/[.:]/)[1]}</h1></Row>
                          {item.datetimeline.find(element =>( (element.split(/[.,]/)[0] < date)&&(element.split(/[.,]/)[1] > date)))&&<Grid container item xs={12} spacing={1} >
                          <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
                          </Grid>}
                          {(item.to[item.datetimeline.findIndex(element => element.split(/[.,]/)[1] == date)]<= time)||(item.from[item.datetimeline.findIndex(element => element.split(/[.,]/)[0] == date)] > time)
                            &&<Grid container item xs={11} spacing={1} >
                     <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                          </Grid>}
                          {(item.datetimeline.find(element =>( (element.split(/[.,]/)[1] == date)))!=undefined)&&<Grid container item xs={12} spacing={1} >
                          <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
                          </Grid>}
     
                          </Col>  
                        )
  
                      }
                     }
                    else {
                      return(
                        <Col>
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{time.split(/[.:]/)[0]+":"+time.split(/[.:]/)[1]}</h1></Row>
                        <Grid container item xs={11} spacing={1} >
                   <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                        </Grid>
   
                        </Col>  
                      )

                    }
                  }
                    
                }
                    )}
                    
                   </Grid>
                  </Collapse>
                  <ListItem button onClick={(e)=>handleClick1(e)}>
                  <ListItemText primary="jours du mois de " />
                  <select id="mois" onChange={(e)=>change(e)} value={moiss} >
                    <option value="current">select</option>
                    <option value="02">Fevrier</option>
                    <option value="03">Mars</option>
                    <option value="04">Avril</option>
                    <option value="05">Mai</option>
                    <option value="06">Juin</option>
                    <option value="07">Juillet</option>
                    <option value="08">Aout</option>
                    <option value="09">Septembre</option>
                    <option value="10">Octobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Decembre</option>
                    <option value="01">Janvier</option>
                    </select>
           
                  {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open2} timeout="auto" unmountOnExitt>
                <Grid style={{...classes.flexCenter, paddingHorizontal:40}}>
                   {getDaysArray(y,moiss).map(jour   =>{
                    console.log((item.datetimeline.find(element => ((element.split(/[,]/)[0] <= y+'-'+moiss+'-'+jour)&&(element.split(/[.,]/)[1]>= y+'-'+moiss+'-'+jour)))!=undefined),(item.datetimeline.find(element => ((element.split(/[,]/)[0] <= y+'-'+moiss+'-'+jour)&&(element.split(/[.,]/)[1] >= y+'-'+moiss+'-'+jour)))) )
                   if(item.datetimeline.find(element => ((element.split(/[.,]/)[0] <= y+'-'+moiss+'-'+jour)&&(element.split(/[.,]/)[1] >= y+'-'+moiss+'-'+jour)))!=undefined){

                        return(
                     <Col>
                     <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{jour}</h1></Row>
                    <Grid container item xs={11} spacing={1} >
                     <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
                     </Grid>
                     </Col>)}
                    else{
                      return(
                        <Col>
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{jour}</h1></Row>
                        <Grid container item xs={11} spacing={1} >
                   <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                        </Grid>
   
                        </Col>  
                      )

                    }}
                    
                  
     
                    )}
                    
                   </Grid>
                  </Collapse>
                  <ListItem button onClick={(e)=>handleClick2(e)}>
                  <ListItemText primary="mois de l'année" />
                  <select id="mois" onChange={(e)=>changes(e)} value={year} >
                 
                    {
                      years.map((year, index) => {
                        return <option key={`year${index}`} value={year}>{year}</option>
                      })
                    }
                </select>
                  {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open3} timeout="auto" unmountOnExittt>
                <Grid style={{...classes.flexCenter, paddingHorizontal:40}}>
                   {mois.map(moi   =>{
                     //console.log(date,item.datefin,moi.split(/[.:]/)[1],item.datedebut[item.datefin.findIndex(element => (element.split(/[.-]/)[1] >= moi.split(/[.:]/)[1]))],item.datefin.find(element => (element.split(/[.-]/)[1] >= moi.split(/[.:]/)[1])),(item.datefin.find(element => (element.split(/[.-]/)[1] >= moi.split(/[.:]/)[1]))!=undefined)&&(item.datedebut[item.datefin.findIndex(element => (element.split(/[.-]/)[1] >= moi.split(/[.-]/)[1]))]<= moi.split(/[.:]/)[1]))
                     if(item.datedebut.find(element => (element.split(/[.-]/)[0] == year))!=undefined) {
                     if((item.datefin.find(element => (element.split(/[.-]/)[1] == moi.split(/[.:]/)[1])&&(element.split(/[.-]/)[0] == year))!=undefined)||(item.datedebut.find(element => (element.split(/[.-]/)[1] == moi.split(/[.:]/)[1])&&(element.split(/[.-]/)[0] == year))!=undefined)){
                      return(
                   <Col>
                   <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{moi.split(/[.:]/)[0]}</h1></Row>
                  <Grid container item xs={11} spacing={1} >
                   <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
                   </Grid>
                   </Col>)}
                  else{
                    return(
                      <Col>
                      <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{moi.split(/[.:]/)[0]}</h1></Row>
                      <Grid container item xs={11} spacing={1} >
                 <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                      </Grid>
 
                      </Col>  
                    )

                  }}
                  else{
                    return(
                      <Col>
                      <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{moi.split(/[.:]/)[0]}</h1></Row>
                      <Grid container item xs={11} spacing={1} >
                 <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                      </Grid>
 
                      </Col>  
                    )

                  }
                }
                    )}
                    
                   </Grid>
                  </Collapse>
                </List>
              
                   
                   
                   
                   
                  </Row>
                  </Grid>  )}
               
                </Grid>
  );

}
export default Car