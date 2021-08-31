import React, {useState,useEffect} from 'react';
import axios from "axios";
import NativeSelect from '@material-ui/core/NativeSelect';
const API_URL = require('../../src/cfg')()+'calendar'


function Reser() {
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

setItems(result.data.content);
};
useEffect(() => {
   fetchData();
  
}, [])
//console.log(items.x) 
  return (
    <div>
    
       {items.map(item  =>
        <div>
        <NativeSelect id="room" onChange={(e)=>changeroom(e)} value={room}  style={{fontSize: 15 }}>
                    <option value={item.id}>{item.room}</option>
                    </NativeSelect>
                    </div>
                   )}
     </div>   
  );

}
export default Reser