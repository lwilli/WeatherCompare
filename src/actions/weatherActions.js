/** 
 * All weather actions
 */
import * as actions from '../constants/actionTypes';
import 'whatwg-fetch';
import ReduxThunk from 'redux-thunk';

const darkSkyKey = 'dec125ef6253125e9715cc3e96b650af';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

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
 * Updates the selected city
 * 
 * @param  {string} cityName The fully qualified city name
 * @param {number} cityNum The index of the city to change in the state
 *
 * @return {object} An action object with a type of CHANGE_SELECTED_CITY
 */
export function changeSelectedCity(cityName, cityNum) {
  return {
    type: actions.CHANGE_SELECTED_CITY,
    cityName,
    cityNum
  }
}


/**
 * Changes the weather data
 * 
 * @param {object} weatherData The weatherData to set
 * @param {number} cityNum The index of the city to change in the state
 *
 * @return {object} An action object with a type of CHANGE_WEATHER_DATA
 */
export function changeWeatherData(weatherData, cityNum) {
  return {
    type: actions.CHANGE_WEATHER_DATA,
    weatherData,
    cityNum
  }
}

// gets lat/long from city link data
function getLatLong(resp) {
  return resp.location.latlon;
}

function consoleLog(data) {
  console.log(data);
  return data;
}

/**
 * DarkSky weather request/response handler (API call)
 */
export function fetchWeatherForCity(cityLink, cityNum) {
  return dispatch => {
    fetch(cityLink)
      .then(checkStatus)
      .then(parseJSON)
      .then(getLatLong)
      .then(function(coordinates) {
        const darkSkyURL = `https://api.darksky.net/forecast/${darkSkyKey}/${coordinates.latitude},${coordinates.longitude}`;
        fetch(corsAnywhere + darkSkyURL)
          .then(checkStatus)
          .then(parseJSON)
          .then(function(data) {
            //console.log('DarkSky weather request succeeded with JSON response', data);
            dispatch(changeWeatherData(data, cityNum));
          }).catch(function(error) {
            console.error('DarkSky weather request failed', error);
          })
      })
      .catch(function(error) {
        console.error('Fetching city link failed', error);
      })
  }
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
 * @param {number} cityNum The index of the city to change in the state
 *
 * @return {object} An action object with a type of CHANGE_PARTIAL_CITY
 */
export function changePartialCity(partialCity, cityNum) {
  return {
    type: actions.CHANGE_PARTIAL_CITY,
    partialCity,
    cityNum
  };
}

/**
 * Changes the matching cities
 *
 * @param  {array} matchingCities The new matching cities (e.g. [{'name': 'Atascadero', 'link': 'https://atascadero.org'}])
 * @param {number} cityNum The index of the city to change in the state
 *
 * @return {object} An action object with a type of CHANGE_MATCHING_CITIES
 */
export function changeMatchingCities(matchingCities, cityNum) {
  return {
    type: actions.CHANGE_MATCHING_CITIES,
    matchingCities, 
    cityNum
  }
}

/**
 * Async handler for updating matching cities based on partialCity
 * 
 * @param {string} partialCity 
 */
export function fetchMatchingCities(partialCity, cityNum) {
  return dispatch => {
    fetch(`https://api.teleport.org/api/cities/?search=${partialCity}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(simplifyAutocompleteResponse)
      .then(function(matchingCities) {
        //console.log('City Autocomplete data: ', matchingCities);
        dispatch(changeMatchingCities(matchingCities, cityNum));
      }).catch(function(error) {
        console.error('City Autocomplete request failed', error);
      });
  }
}


/**
 * Changes the shouldDisplay for a city
 *
 * @param {number} cityNum The index of the city to change in the state
 * @param {boolean} shouldDisplay The value to set
 *
 * @return {object} An action object with a type of CHANGE_MATCHING_CITIES
 */
export function changeShouldDisplay(cityNum, shouldDisplay) {
  return {
    type: actions.CHANGE_SHOULD_DISPLAY,
    cityNum,
    shouldDisplay
  }
}


/**
 * Clear the selected city (return to the form)
 *
 * @param {number} cityNum The index of the city to change in the state
 *
 * @return {object} An action object with a type of CLEAR_SELECTED_CITY
 */
export function clearSelectedCity(cityNum) {
  return {
    type: actions.CLEAR_SELECTED_CITY,
    cityNum
  }
}