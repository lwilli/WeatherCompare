/** 
 * All weather actions
 */
import * as actions from '../constants/actionTypes';
import 'whatwg-fetch';
import ReduxThunk from 'redux-thunk';

const darkSkyKey = 'dec125ef6253125e9715cc3e96b650af';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}


/**
 * DarkSky weather request/response handler (API call)
 */
function getWeather(lat, long) {
  const requestURL = `https://api.darksky.net/forecast/${darkSkyKey}/${lat},${long}`;

  fetch(requestURL)
    .then(checkStatus)
    .then(parseJSON)
    .then(function(data) {
      console.log('DarkSky weather request succeeded with JSON response', data);
      return data;
    }).catch(function(error) {
      console.error('DarkSky weather request failed', error);
      return null;
    })
}


/**
 * Takes the JSON response from Teleport API and returns just a list with the fqn and link
 * 
 * @param {json object} data 
 */
function simplifyAutocompleteResponse(data) {
  const cities = data['_embedded']['city:search-results'];
  const simpleCities = cities.map(
                        function simplifyOne(li) {
                          return {'name': li['matching_full_name'],
                                  'link': li['_links']['city:item']['href']
                                  };
                        });
    return (!simpleCities || simpleCities.length <= 0) ? [] : simpleCities;
}


/**
 * Changes the input field of the form for city name and updates the matching cities
 *
 * @param  {string} partialCity The new text of the city input field
 *
 * @return {object} An action object with a type of CHANGE_PARTIAL_CITY
 */
export function changePartialCity(partialCity) {
  return {
    type: actions.CHANGE_PARTIAL_CITY,
    partialCity
  };
}

/**
 * Changes the matching cities
 *
 * @param  {array} matchingCities The new matching cities (e.g. [{'name': 'Atascadero', 'link': 'https://atascadero.org'}])
 *
 * @return {object} An action object with a type of CHANGE_MATCHING_CITIES
 */
export function changeMatchingCities(matchingCities) {
  return {
    type: actions.CHANGE_MATCHING_CITIES,
    matchingCities
  }
}

/**
 * Async handler for updating matching cities based on partialCity
 * 
 * @param {string} partialCity 
 */
export function fetchMatchingCities(partialCity) {
  return dispatch => {
    fetch(`https://api.teleport.org/api/cities/?search=${partialCity}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(simplifyAutocompleteResponse)
      .then(function(matchingCities) {
        console.log('City Autocomplete data: ', matchingCities);
        dispatch(changeMatchingCities(matchingCities));
      }).catch(function(error) {
        console.error('City Autocomplete request failed', error);
      });
  }
}
