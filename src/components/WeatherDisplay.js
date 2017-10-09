import React from 'react';
import PropTypes from 'prop-types';
import {getDateString} from '../utils/dateHelper';
import Flexbox from 'flexbox-react';

// stateless functional component like FuelSavingsResults.js
const WeatherDisplay = ({city, cityNum, weatherData, clearSelectedCity}) => {

  const selectCurrently = (valueName) => {
    return weatherData ? weatherData.currently[valueName] : null;
  }
  
  // returns state name if in U.S., otherwise country
  const getGreaterArea = (fullCity) => {
    const parts = fullCity.split(',');
    const last = parts[parts.length - 1].trim();
    if (last == 'United States') {
      return parts[1].trim(); //state
    }
    else {
      return last.replace(/ *\([^)]*\) */g, ""); //return last with removed parenthesized text
    }
  }

  // this.props.changeShouldDisplay(this.props.cityNum, false);

  const timezone = weatherData ? weatherData.timezone : null;

  const clearIfSelected = () => {
    if (weatherData) {
      clearSelectedCity(cityNum);
    }
  }

  return (
    <Flexbox className='weather-display' flexDirection='column' alignItems='center' onClick={() => clearIfSelected()}>
      <div style={{fontSize: '1.8em', textAlign: 'center'}}>
        {city.split(',')[0].toUpperCase()}
      </div>
      <div style={{fontSize: '0.8em', textAlign: 'center'}}>
        {getGreaterArea(city).toUpperCase()}
      </div>
      <div style={{fontSize: '0.8em', textAlign: 'center'}}>
        {getDateString(selectCurrently('time'), timezone)}
      </div>
      <div id='temp-wrapper' style={{ padding: '0px', marginTop: '50px', textAlign: 'center'}}>
        <div id='temp-number' style={{fontSize: '6em', textAlign: 'center', display: 'inline-block'}}>
          {selectCurrently('temperature') ? Math.round(selectCurrently('temperature')) : null}
        </div>
        <div id='degree-icon' style={{fontSize: '3em', textAlign: 'center', padding: '0px', position: 'relative', top: '-0.35em', display: 'inline-block', width: 0, height: 0, verticalAlign: 'top'}}>
          °
        </div>
      </div>
    </Flexbox>
  );
};

WeatherDisplay.propTypes = {
  city: PropTypes.string,
  cityNum: PropTypes.number,
  weatherData: PropTypes.object,
  clearSelectedCity: PropTypes.func
};

export default WeatherDisplay;