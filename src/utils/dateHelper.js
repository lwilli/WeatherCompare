var moment = require('moment-timezone');
var moment = require('moment');

// Given a datetime in unix seconds, returns a nicely formatted date string
export function getDateString(time, timezone) {
  // const dayNames = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];
  // const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

  const dateFormat = "ddd | MMM D | h:mm A";
  var dateStr = '';

  if (time) {
    var dateStr = moment.unix(time).tz(timezone).format(dateFormat).toUpperCase();
    /*
    var date = new Date(time * 1000);
    var dayOfWeekName = dayNames[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var dayOfMonth = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    dateStr = dayOfWeekName + ' | ' + monthName + ' ' + dayOfMonth + ' | ' + hours + ':' + padLeadingZero(minutes) + ' ' + ampm;
    */
  }

  return dateStr;
}

export function getFormattedDateTime(date = new Date()) {
  return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${padLeadingZero(date.getMinutes())}:${padLeadingZero(date.getSeconds())}`;
}

export function padLeadingZero(value) {
  return value > 9 ? value : `0${value}`;
}
