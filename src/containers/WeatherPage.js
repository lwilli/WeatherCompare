import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/weatherActions';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';

export const WeatherPage = (props) => {
  return (
    <div>
      <br/>
      <br/>
      {/* First city */}
      {'Enter a city: '}
      <WeatherForm
        cityNum={0}
        loading={props.loading}
        error={props.error}
        partialCity={props.firstCity.partialCity}
        matchingCities={props.firstCity.matchingCities}
        fetchMatchingCities={props.actions.fetchMatchingCities}
        changePartialCity={props.actions.changePartialCity}
        changeSelectedCity={props.actions.changeSelectedCity}
        fetchWeatherForCity={props.actions.fetchWeatherForCity}
      />
      <br/>
      <WeatherDisplay
        weatherData={props.firstCity.weatherData}
      />
      <br/>
      <br/>

      {/* Second city */}
      {'Enter a city: '}
      <WeatherForm
        cityNum={1}
        loading={props.loading}
        error={props.error}
        partialCity={props.secondCity.partialCity}
        matchingCities={props.secondCity.matchingCities}
        fetchMatchingCities={props.actions.fetchMatchingCities}
        changePartialCity={props.actions.changePartialCity}
        changeSelectedCity={props.actions.changeSelectedCity}
        fetchWeatherForCity={props.actions.fetchWeatherForCity}
      />
      <br/>
      <WeatherDisplay
        weatherData={props.secondCity.weatherData}
      />
    </div>
  );
};

WeatherPage.propTypes = {
  actions: PropTypes.object.isRequired,
  /*
  selectedCity: PropTypes.string,
  partialCity: PropTypes.string,
  matchingCities: PropTypes.array,
  weatherData: PropTypes.object,
  */
  firstCity: PropTypes.object,
  secondCity: PropTypes.object,
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
    /*
    selectedCity: state.selectedCity,
    partialCity: state.partialCity,
    matchingCities: state.matchingCities,
    weatherData: state.weatherData,
    */
    firstCity: state.cities[0],
    secondCity: state.cities[1],
    loading: state.loading,
    error: state.error,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
