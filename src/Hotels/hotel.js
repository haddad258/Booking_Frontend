import React, {useState,useEffect} from 'react';
import axios from "axios";
import NativeSelect from '@material-ui/core/NativeSelect';
import Timeline from './room1';
import {Row,Col} from 'reactstrap';
import Clock from 'react-live-clock';
import Grid from '@material-ui/core/Grid';
const API_URL = require('../cfg')()


function Reser() {
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
const [items, setItems] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);
const [room, setroom] = useState("room1");

const changeroom=event =>{
  setroom(
    event.target.value,  
);
}


const fetchData = async () => {
  const result = await axios(API_URL+"room")
  
      setIsLoaded(true);
      console.log("azr",result.data.content);

setItems(result.data.content);
setroom(result.data.content[0].id)
};
useEffect(() => {
   fetchData();
  
}, [])
//console.log(items.x) 
  return (
    <Grid style={{width:'100%',height:'100%'}}>
     
     <Row style={classes.header}>
      <Col style={{...classes.flexCenter,marginInline:350}}>          
        <h1 style={classes.roomName}>Meeting Room </h1>
      
        <NativeSelect id="room" onChange={(e)=>changeroom(e)} value={room}  style={{fontSize: 15 }}>
        {items.map(item  =>
                    <option value={item.id}>{item.room}</option>
                    )}
                    </NativeSelect>     
                   </Col>
                    <Col style={classes.roomName}>
                      <h1 style={{textAlign: "right"}}>
                      <Clock format={'HH:mm:ss'} ticking={true}  />
                      </h1>
                    </Col>
                  </Row>
                  <Timeline room={room} />
                  
                
                 </Grid>


  );

}
export default Reser