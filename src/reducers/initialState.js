export default {
  weather: {
    loading: false,
    error: false,
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
