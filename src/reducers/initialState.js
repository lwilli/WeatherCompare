export default {
  weather: {
    loading: false,
    error: false,
    /*
    partialCity: '',
    selectedCity: '',
    matchingCities: [],
    weatherData: null,
    */
    cities: [{
      partialCity: '', 
      selectedCity: '',
      matchingCities: [],
      weatherData: null,
      shouldDisplay: true,
    },
    {
      partialCity: '',
      selectedCity: '',
      matchingCities: [],
      weatherData: null,
      shouldDisplay: false,
    }],
  },
};
