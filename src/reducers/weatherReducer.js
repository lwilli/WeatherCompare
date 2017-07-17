import { CHANGE_PARTIAL_CITY, CHANGE_MATCHING_CITIES, CHANGE_SELECTED_CITY, CHANGE_WEATHER_DATA } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function weatherReducer(state = initialState.weather, action) {
  let newState;

  switch (action.type) {
    case CHANGE_PARTIAL_CITY:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, partialCity: action.partialCity, weatherData: null} // null to clear weather data
                                                       : content
        )
      });
    case CHANGE_MATCHING_CITIES:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, matchingCities: action.matchingCities}
                                                       : content
        )
      });

    case CHANGE_SELECTED_CITY:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, selectedCity: action.cityName, partialCity: action.cityName}
                                                       : content
        )
      });

    case CHANGE_WEATHER_DATA:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, weatherData: action.weatherData}
                                                       : content
        )
      });

    default:
      return state;
  }
}
