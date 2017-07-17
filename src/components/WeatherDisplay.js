import React from 'react';
import PropTypes from 'prop-types';
import {getDateString} from '../utils/dateHelper';

// stateless functional component like FuelSavingsResults.js
const WeatherDisplay = ({weatherData}) => {

  const selectCurrently = (valueName) => {
    return weatherData ? weatherData.currently[valueName] : null;
  }
  
  return (
    <div>
      {selectCurrently('temperature') ? selectCurrently('temperature') + '°' : null}
      {'\n'}
      {getDateString(selectCurrently('time'))}
    </div>
  );
}

WeatherDisplay.propTypes = {
  weatherData: PropTypes.object
};

export default WeatherDisplay;