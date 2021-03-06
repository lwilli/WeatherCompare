import * as actions from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import {colorForWeatherData} from '../utils/tempColors';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function weatherReducer(state = initialState.weather, action) {
 
  switch (action.type) {
    case actions.CHANGE_PARTIAL_CITY:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, selectedCity: '', partialCity: action.partialCity, weatherData: null} // null to clear weather data
                                                       : content
        )
      });
    case actions.CHANGE_MATCHING_CITIES:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, matchingCities: action.matchingCities}
                                                       : content
        )
      });

    case actions.CHANGE_SELECTED_CITY:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, selectedCity: action.cityName, partialCity: action.cityName}
                                                       : content
        )
      });

    case actions.CHANGE_WEATHER_DATA:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, 
                                                          weatherData: action.weatherData,
                                                          backgroundColor: colorForWeatherData(action.weatherData)
                                                         }
                                                       : content
        )
      });

    case actions.CHANGE_SHOULD_DISPLAY:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, shouldDisplay: action.shouldDisplay}
                                                       : content
        )
      }); 

      case actions.CLEAR_SELECTED_CITY:
      return objectAssign({}, state, {
        ...state,
        cities: state.cities.map(
          (content, index) => index === action.cityNum ? {...content, 
                                                          partialCity: '',
                                                          selectedCity: '',
                                                          matchingCities: [],
                                                          weatherData: null,
                                                          shouldDisplay: true, 
                                                          backgroundColor: '#fafafa'}
                                                       : content
        )
      });

    default:
      return state;
  }
}
