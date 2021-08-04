import React, {Fragment,useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Row,Col,Container} from 'reactstrap';
import {DatePicker } from 'antd';
import Clock from 'react-live-clock';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import axios from "axios";
import UpdateIcon from '@material-ui/icons/Update';
import TimeRangeSlider from 'react-time-range-slider';
import { time } from 'faker';
import { Button } from '@material-ui/core';
import Reservation from './reservation';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

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
                          name  ={"time_range"}
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
                     {(item.disponible==="Reservé")  && <Row><h1 style={{...classes.nextBooking , height:22,fontSize: 20 }}> {item.date} </h1></Row>}
                    </Grid>
                    </Col>
                    <Col>
                    
                    <Grid style={{textAlign: "right"}}>

                   
                      <Col >            
                         <Reservation id={id}/>
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
                  <ListItem button onClick={handleClick}>
                  <ListItemText primary="disponibilité de heures pour la date" />
                  <input
                  type="date"
                  onChange={handleChange}
                  value={date} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid style={{...classes.flexCenter, paddingHorizontal:40}}>
                   {times.map(time   =>{
                     console.log(id,date,item.datedebut,item.datedebut.find(element => (element == date)))
                   if(item.datedebut.find(element => (element == date))!=undefined){
                    //console.log(item.to.find(element => element > time),time,(item.from[item.to.findIndex(element => element>= time)].split(/[.:]/))[0],((item.from[item.to.findIndex(element => element>= time)] < (time.split(/[.:]/))[0])&&((item.to.find(element => element >= time)!=undefined))))
                      if(((item.to.find(element => element >= time)!=undefined))&&((item.from[item.to.findIndex(element => element >= time)].split(/[.:]/))[0] <= (time.split(/[.:]/))[0])){
                        console.log("az")
                        return(
                     <Col>
                     <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 12 }}>{time}</h1></Row>
                     {(item.to.find(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])!=undefined)&&<Grid container item xs={11} spacing={1} >
                     {(item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)  &&  <Grid item md={12-item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12} style={{backgroundColor:"red"} }> </Grid>}{(item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)&&<Grid item md={item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12}  style={{backgroundColor:bgColor} }></Grid>}{ (item.x1[item.to.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]==0)  &&<Grid item md={12} xs={12} style={{backgroundColor:"red"} }> </Grid>}
                     </Grid>}
                     {(item.from.find(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])!=undefined)&&<Grid container item xs={11} spacing={1} >
                     { (item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)  &&<Grid item md={12-item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12} style={{backgroundColor:bgColor} }> </Grid>}{(item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]!=0)&&<Grid item md={item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12}  style={{backgroundColor:"red"} }></Grid>}{ (item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]==0)  &&<Grid item md={item.x[item.from.findIndex(element => (element.split(/[.:]/))[0] == (time.split(/[.:]/))[0])]} xs={12} style={{backgroundColor:"red"} }> </Grid>}
                     </Grid>}
                     {(item.to.find(element => (element.split(/[.:]/))[0] > (time.split(/[.:]/))[0])!=undefined)&&(item.from[item.to.findIndex(element => (element.split(/[.:]/))[0]> (time.split(/[.:]/))[0])]<=(time.split(/[.:]/))[0])&&<Grid container item xs={11} spacing={1} >
                     <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
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

                    }}
                    else{
                      return(
                        <Col>
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 12 }}>{time}</h1></Row>
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
                  <ListItem button onClick={handleClick1}>
                  <ListItemText primary="jours du mois de " />
                  <select id="mois" onChange={change} value={moiss} >
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
                   {jours.map(jour   =>{
                     console.log(((item.datefin.find(element => (element.split(/[.-]/)[2] >= jour))!=undefined)&&(item.datedebut[item.datefin.findIndex(element => (element.split(/[.-]/)[2] >= jour))]<= jour)),item.datedebut[item.datefin.findIndex(element => (element.split(/[.-]/)[2] >= jour))],item.datefin.find(element => (element.split(/[.-]/)[2] >= jour)),date,item.datedebut.find(element => (element.split(/[.-]/)[1] == moiss)))
                     if(item.datedebut.find(element => (element.split(/[.-]/)[1] == moiss))!=undefined) {
                   if((item.datefin.find(element => (element.split(/[.-]/)[2] == jour))!=undefined)||(item.datedebut.find(element => (element.split(/[.-]/)[2] == jour))!=undefined)){

                        return(
                     <Col>
                     <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 11 }}>{jour}</h1></Row>
                    <Grid container item xs={11} spacing={1} >
                     <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
                     </Grid>
                     </Col>)}
                    else{
                      return(
                        <Col>
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 11 }}>{jour}</h1></Row>
                        <Grid container item xs={11} spacing={1} >
                   <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                        </Grid>
   
                        </Col>  
                      )

                    }}
                    else{
                      return(
                        <Col>
                        <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 11 }}>{jour}</h1></Row>
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
                  <ListItem button onClick={handleClick2}>
                  <ListItemText primary="mois de l'année" />
                  <select id="mois" onChange={changes} value={year} >
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    </select>
                  {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open3} timeout="auto" unmountOnExittt>
                <Grid style={{...classes.flexCenter, paddingHorizontal:40}}>
                   {mois.map(moi   =>{
                     console.log(date,item.datefin,moi.split(/[.:]/)[1],item.datedebut[item.datefin.findIndex(element => (element.split(/[.-]/)[1] >= moi.split(/[.:]/)[1]))],item.datefin.find(element => (element.split(/[.-]/)[1] >= moi.split(/[.:]/)[1])),(item.datefin.find(element => (element.split(/[.-]/)[1] >= moi.split(/[.:]/)[1]))!=undefined)&&(item.datedebut[item.datefin.findIndex(element => (element.split(/[.-]/)[1] >= moi.split(/[.-]/)[1]))]<= moi.split(/[.:]/)[1]))
                     if(item.datedebut.find(element => (element.split(/[.-]/)[0] == year))!=undefined) {
                     if((item.datefin.find(element => (element.split(/[.-]/)[1] == moi.split(/[.:]/)[1]))!=undefined)||(item.datedebut.find(element => (element.split(/[.-]/)[1] == moi))!=undefined)){
                      return(
                   <Col>
                   <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 10 }}>{moi.split(/[.:]/)[0]}</h1></Row>
                  <Grid container item xs={11} spacing={1} >
                   <Grid item md={6} xs={12} style={{backgroundColor:"red"} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:"red"} }></Grid>
                   </Grid>
                   </Col>)}
                  else{
                    return(
                      <Col>
                      <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 10 }}>{moi.split(/[.:]/)[0]}</h1></Row>
                      <Grid container item xs={11} spacing={1} >
                 <Grid item md={6} xs={12} style={{backgroundColor:bgColor} }> </Grid><Grid item md={6} xs={12}  style={{backgroundColor:bgColor} }></Grid>
                      </Grid>
 
                      </Col>  
                    )

                  }}
                  else{
                    return(
                      <Col>
                      <Row ><h1 style={{...classes.nextBooking , height:22,fontSize: 10 }}>{moi.split(/[.:]/)[0]}</h1></Row>
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