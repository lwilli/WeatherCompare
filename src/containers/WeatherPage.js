import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/weatherActions';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import Flexbox from 'flexbox-react';

export const WeatherPage = (props) => {
  return (
    <div className='parent-container'>
      <Flexbox className='top-container' alignItems="center" justifyContent="center">
        {/* First city */}
        {props.firstCity.shouldDisplay ? 
          <WeatherForm
            cityNum={0}
            loading={props.loading}
            nextCityIsSelected={props.secondCity.selectedCity !== ''}
            error={props.error}
            partialCity={props.firstCity.partialCity}
            matchingCities={props.firstCity.matchingCities}
            fetchMatchingCities={props.actions.fetchMatchingCities}
            changePartialCity={props.actions.changePartialCity}
            changeSelectedCity={props.actions.changeSelectedCity}
            fetchWeatherForCity={props.actions.fetchWeatherForCity}
            changeShouldDisplay={props.actions.changeShouldDisplay}
          />
          :
          <div></div>
        }
        {props.firstCity.selectedCity ?
          <WeatherDisplay
            city={props.firstCity.selectedCity}
            cityNum={0}
            weatherData={props.firstCity.weatherData}
            clearSelectedCity={props.actions.clearSelectedCity}
          />
          :
          <div></div>
        }
      </Flexbox>

      <Flexbox className='bottom-container' alignItems="center" justifyContent="center">
        {/* Second city (only display if shouldDisplay) */}
        {props.secondCity.shouldDisplay ? 
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
              changeShouldDisplay={props.actions.changeShouldDisplay}
            />
          :
          <div></div>
        }
        {props.secondCity.selectedCity ?
          <WeatherDisplay height='50%' width='100%'
            city={props.secondCity.selectedCity}
            cityNum={1}
            weatherData={props.secondCity.weatherData}
            clearSelectedCity={props.actions.clearSelectedCity}
          />
          :
          <div></div>
        }
      </Flexbox>
    </div>
  );
};

WeatherPage.propTypes = {
  actions: PropTypes.object.isRequired,
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
