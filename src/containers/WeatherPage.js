import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/weatherActions';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';

export const WeatherPage = (props) => {

  var currentTemp = 0;
  if (props.weatherData && props.weatherData.currently && props.weatherData.currently.temperature) {
    currentTemp = props.weatherData.currently.temperature;
  }

  return (
    <div>
      <br/>
      <br/>
      {'Enter a city: '}
      <WeatherForm
        loading={props.loading}
        error={props.error}
        partialCity={props.partialCity}
        matchingCities={props.matchingCities}
        fetchMatchingCities={props.actions.fetchMatchingCities}
        changePartialCity={props.actions.changePartialCity}
        changeSelectedCity={props.actions.changeSelectedCity}
        fetchWeatherForCity={props.actions.fetchWeatherForCity}
      />
      <br/>
      <WeatherDisplay
        currentTemperature={currentTemp}
      />
    </div>
  );
};

WeatherPage.propTypes = {
  actions: PropTypes.object.isRequired,
  selectedCity: PropTypes.string,
  partialCity: PropTypes.string,
  matchingCities: PropTypes.array,
  weatherData: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

function mapStateToProps(state) {
  state = state.weatherReducer;

  return {
    selectedCity: state.selectedCity,
    partialCity: state.partialCity,
    matchingCities: state.matchingCities,
    weatherData: state.weatherData,
    loading: state.loading,
    error: state.error,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
