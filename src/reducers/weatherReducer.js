import { CHANGE_PARTIAL_CITY, CHANGE_MATCHING_CITIES } from '../constants/actionTypes';
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
      newState = objectAssign({}, state);
      newState.partialCity = action.partialCity;
      return newState;

    case CHANGE_MATCHING_CITIES:
      newState = objectAssign({}, state);
      newState.matchingCities = action.matchingCities;
      return newState;
      
    default:
      return state;
  }
}
