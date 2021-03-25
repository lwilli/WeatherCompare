const moment = require('moment-timezone');

// Given a datetime in unix seconds, returns a nicely formatted date string
export function getDateString(time, timezone) {
  const dateFormat = "ddd | MMM D | h:mm A";
  var dateStr = '';

  if (time) {
    dateStr = moment.unix(time).tz(timezone).format(dateFormat).toUpperCase();
  }

  return dateStr;
}