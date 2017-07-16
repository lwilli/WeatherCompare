import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/weatherActions';
import WeatherForm from '../components/WeatherForm';

export const WeatherPage = (props) => {
  return (
    <WeatherForm
      loading={props.loading}
      error={props.error}
      partialCity={props.partialCity}
      matchingCities={props.matchingCities}
      fetchMatchingCities={props.actions.fetchMatchingCities}
      changePartialCity={props.actions.changePartialCity}
    />
  );
};

WeatherPage.propTypes = {
  actions: PropTypes.object.isRequired,
  partialCity: PropTypes.string,
  matchingCities: PropTypes.array,
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
    partialCity: state.partialCity,
    matchingCities: state.matchingCities,
    loading: state.loading,
    error: state.error,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
