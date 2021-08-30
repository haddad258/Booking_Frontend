import React, {useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Row,Col} from 'reactstrap';
import Clock from 'react-live-clock';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import axios from "axios";
import Reservation from './reservation';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NativeSelect from '@material-ui/core/NativeSelect';
import "./style.css"
const API_URL = require('../../src/cfg')()+'calendar'


function Room() {
  const classes = ({header:{
      
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
  }})
  const yearn = (new Date()).getFullYear();
  const years = Array.from(new Array(20),(val, index) => index + yearn);
  var d = new Date();
  var y = d.getFullYear();
  var mm = (d.getMonth()+1);
  var dd = d.getDate();
  
  if( mm < 10 ){ mm = '0' + mm; }
  if( dd < 10 ){ dd = '0' + dd; }

  var dat = y+'-'+mm+'-'+dd;
 var heurss=h + ':' + m + ':' + s;
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  if( h < 10 ){ h = '0' + h; }
  if( m < 10 ){ m = '0' + m; }
  if( s < 10 ){ s = '0' + s; }
  var hours = h + ':' + m + ':' + s
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
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
    "21:00",
    "22:00",
    "23:00",
   
  ]);
  const [items, setItems] = useState([]);
const [date, setdate] = useState(dat);
const [moiss, setmoiss] = useState(mm);
const [room, setroom] = useState("room1");
const [year, setyear] = useState(y);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen2(!open2);
  };
 

  const handleClick2 = () => {
    setOpen3(!open3);
  };
  
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
const change=event =>{
  setmoiss(
    event.target.value,  
);
}
const changeroom=event =>{
  console.log("Azhar")
  setroom(
    event.target.value,  
);
}
const changes=event =>{
  setyear(
    event.target.value,  
);
}
const handleChange = event => {
  setdate(
      event.target.value,  
  );
};
const fetchData = async (date,hours,room) => {
  const result = await axios(API_URL+"?date="+`${date}`+"&hours="+`${hours}`+"&room="+`${room}`)
  
      setIsLoaded(true);

setItems(result.data.content);
};
useEffect(() => {
   fetchData(date,hours,room);
   const interval=setInterval(()=>{
    fetchData(date,hours,room)
   },10000)
      
   return()=>clearInterval(interval)
}, [date,hours,room])
//console.log(items.x) 
  return (
    <Grid style={{width:'100%',height:'100%'}}>
    
       {items.map(item  =>
 
      <Grid>
                     <Row style={classes.header}>
                    <Col style={{...classes.flexCenter,marginInline:350}}>          
        <h1 style={classes.roomName}>Meeting Room </h1>
        <NativeSelect id="room" onChange={(e)=>changeroom(e)} value={room}  style={{fontSize: 15 }}>
                    <option value="room1">room1</option>
                    <option value="room2">room2</option>
                    <option value="room3">room3</option>
                    <option value="room4">room4</option>
                    <option value="room5">room5</option>
                    <option value="room6">room6</option>

                    </NativeSelect>
        {/* {("1"==="1") && <p>hello </p>} */}
                    </Col>
                    <Col style={classes.roomName}>
                      <h1 style={{textAlign: "right"}}>
                      <Clock format={'HH:mm:ss'} ticking={true}  />
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
                         <Reservation room={room}/>
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
                   if(item.datedebut.find(element => (element == date))!=undefined){
                    //console.log(item.to.find(element => element > time),time,(item.from[item.to.findIndex(element => element>= time)].split(/[.:]/))[0],((item.from[item.to.findIndex(element => element>= time)] < (time.split(/[.:]/))[0])&&((item.to.find(element => element >= time)!=undefined))))
                      if(((item.to.find(element => element >= time)!=undefined))&&((item.from[item.to.findIndex(element => element >= time)].split(/[.:]/))[0] <= (time.split(/[.:]/))[0])){
                        //console.log("az")
                        return(
                     <Col>
                     <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{time}</h1></Row>
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
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{time}</h1></Row>
                        <Grid container item xs={12} spacing={1} >
                   <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                        </Grid>
   
                        </Col>  
                      )

                    }}
                    else{
                      return(
                        <Col>
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 15 }}>{time}</h1></Row>
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
                    console.log(item.datefin[item.datedebut.findIndex(element => (element == y+'-'+moiss+'-'+jour))],(item.datedebut.find(element => (element <= y+'-'+moiss+'-'+jour))),(item.datedebut.find(element => (element <= y+'-'+moiss+'-'+jour))!=undefined),(item.datefin[item.datedebut.findIndex(element => (element == y+'-'+moiss+'-'+jour))]>= y+'-'+moiss+'-'+jour) )
                   if(item.datetimeline.find(element => ((element.split(/[,]/)[0] <= y+'-'+moiss+'-'+jour)&&(element.split(/[.,]/)[1]>= y+'-'+moiss+'-'+jour)))){

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
                     if((item.datefin.find(element => (element.split(/[.-]/)[1] == moi.split(/[.:]/)[1])&&(element.split(/[.-]/)[0] == year))!=undefined)||(item.datedebut.find(element => (element.split(/[.-]/)[1] == moi)&&(element.split(/[.-]/)[0] == year))!=undefined)){
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
export default Room