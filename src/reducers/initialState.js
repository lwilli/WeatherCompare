export default {
  weather: {
    loading: false,
    error: false,
    sidebarOpen: false,
    cities: [{
      partialCity: '', 
      selectedCity: '',
      matchingCities: [],
      weatherData: null,
      backgroundColor: '#fafafa',
      shouldDisplay: true,
    },
    {
      partialCity: '',
      selectedCity: '',
      matchingCities: [],
      weatherData: null,
      backgroundColor: '#fafafa',
      shouldDisplay: false,
    }],
  },
};
