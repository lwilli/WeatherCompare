export default {
  weather: {
    loading: false,
    error: false,
    partialCity: '',
    selectedCity: '',
    matchingCities: [],
    weatherData: null,
    firstCity: {
      name: null,
      curTemp: null,
      lat: null,
      long: null,
    },
    secondCity: {
      name: null,
      curTemp: null,
      lat: null,
      long: null,
    },
  },
};
