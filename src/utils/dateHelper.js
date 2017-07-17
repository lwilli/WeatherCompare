// Given a datetime in unix ms, returns a nicely formatted date string
export function getDateString(ms) {
  const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
  var dateStr = '';

  if (ms) {
    var date = new Date(ms * 1000);
    var dayOfWeekName = dayNames[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var dayOfMonth = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    dateStr = dayOfWeekName + ' | ' + monthName + ' ' + dayOfMonth + ' | ' + hours + ':' + padLeadingZero(minutes) + ampm;
  }

  return dateStr;
}

export function getFormattedDateTime(date = new Date()) {
  return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${padLeadingZero(date.getMinutes())}:${padLeadingZero(date.getSeconds())}`;
}

export function padLeadingZero(value) {
  return value > 9 ? value : `0${value}`;
}
