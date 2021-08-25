import React, { Fragment ,useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

function MyCalendar  () {
  return(
  <div>
    <Calendar
      localizer={localizer}
      
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)}
export default MyCalendar;