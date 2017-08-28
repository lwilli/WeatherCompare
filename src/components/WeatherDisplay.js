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
    const parts = city.split(',');
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
    <Flexbox flexDirection='column' alignItems='center' onClick={() => clearIfSelected()}>
      <div style={{fontSize: '30px'}}>
        {city.split(',')[0]}
      </div>
      <div style={{fontSize: '15px'}}>
        {getGreaterArea(city)}
      </div>
      <div>
        {getDateString(selectCurrently('time'), timezone)}
      </div>
      <div style={{fontSize: '50px', padding: '10px'}}>
        {selectCurrently('temperature') ? selectCurrently('temperature') + '°' : null}
      </div>
    </Flexbox>
  );
}

WeatherDisplay.propTypes = {
  city: PropTypes.string,
  cityNum: PropTypes.number,
  weatherData: PropTypes.object,
  clearSelectedCity: PropTypes.func
};

export default WeatherDisplay;