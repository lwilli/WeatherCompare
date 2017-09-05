var moment = require('moment-timezone');
var moment = require('moment');

// Given a datetime in unix seconds, returns a nicely formatted date string
export function getDateString(time, timezone) {
  const dateFormat = "ddd | MMM D | h:mm A";
  var dateStr = '';

  if (time) {
    var dateStr = moment.unix(time).tz(timezone).format(dateFormat).toUpperCase();
  }

  return dateStr;
}

export function getFormattedDateTime(date = new Date()) {
  return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${padLeadingZero(date.getMinutes())}:${padLeadingZero(date.getSeconds())}`;
}

export function padLeadingZero(value) {
  return value > 9 ? value : `0${value}`;
}
