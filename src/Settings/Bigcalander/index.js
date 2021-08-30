import React, { Fragment ,useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from "axios";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import cfg from '../../../src/cfg';
const url = cfg.url;
const API_URL = url+'settings'

const localizer = momentLocalizer(moment)

function MyCalendar  () {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
  
    axios.get(API_URL).then((response)=>{
      
          setIsLoaded(true);

  setItems(response.data.content);
    })
  }, [])
  return(
  <div>
    <Calendar
      localizer={localizer}
      events={items}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)}
export default MyCalendar;