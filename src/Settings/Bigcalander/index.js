import React, { Fragment ,useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from "axios";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import event from './event'
const url = require('../../cfg')()
const API_URL = url+'calendar/settings'

const localizer = momentLocalizer(moment)
function MyCalendar  () {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
  
    axios.get(API_URL).then((response)=>{
      
          setIsLoaded(true);
console.log(event)
console.log(response.data.content)
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
        start: new Date(e.dateDebut.split(/[.-]/)[0],e.dateDebut.split(/[.-]/)[1]-1,e.dateDebut.split(/[.-]/)[2],e.heuredebut.split(/[.:]/)[0],e.heuredebut.split(/[.:]/)[1],e.heuredebut.split(/[.:]/)[2]),
        end: new Date(e.dateFin.split(/[.-]/)[0],e.dateFin.split(/[.-]/)[1]-1,e.dateFin.split(/[.-]/)[2],e.heurefin.split(/[.:]/)[0],e.heurefin.split(/[.:]/)[1],e.heurefin.split(/[.:]/)[2]),

      }))}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)}
export default MyCalendar;