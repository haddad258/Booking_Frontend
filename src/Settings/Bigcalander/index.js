import React, { Fragment ,useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from "axios";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import event from './event'
const url = require('../../../src/cfg')()
const API_URL = url+'calendar/settings'

const localizer = momentLocalizer(moment)

function MyCalendar  () {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
  
    axios.get(API_URL).then((response)=>{
      
          setIsLoaded(true);
console.log(event)
setItems(response.data.content);
    })
  }, [])
  return(
  <div>
    <Calendar
      localizer={localizer}
      startOfWeek={1}
      events={items.map(e=>({
        title: e.title,
        start: e.start,
        end: e.end,

      }))}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)}
export default MyCalendar;