// colors
// off white #EDF4ED
// steel blue #2E86AB  dark blue gray #666A86   dark cerrulliean? #083D77
// pastel blue #81A4CD
// orange #F08A4B
// softer orange/yellow #F7B267
// red #CC2936

const colorTempThresholds = {
  '-999': '#000048',
  32: '#083D77',
  55: '#81A4CD',
  70: '#F7B267',
  80: '#F08A4B',
  95: '#CC2936'
}

// Returns the color for the given temperature based on
// the thresholds in colorTempTrhesholds
function colorForTemp(temp) {
  return colorTempThresholds[Math.max(...Object.keys(colorTempThresholds).filter(key => key <= temp))];
}

// Given a weatherData object, returns the color for the current temp or white if null
export function colorForWeatherData(weatherData) {
  return weatherData ? colorForTemp(weatherData.currently['temperature']) : '000000';
}