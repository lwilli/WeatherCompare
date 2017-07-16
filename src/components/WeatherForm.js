import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';

class WeatherForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.cityKeypress = this.cityKeypress.bind(this);
    this.onChangeSelectedCity = this.onChangeSelectedCity.bind(this);
  }

  cityKeypress(newPartialCity) {
    this.props.changePartialCity(newPartialCity);
    this.props.fetchMatchingCities(newPartialCity);
  }

  onChangeSelectedCity(cityName) {
    this.props.changeSelectedCity(cityName);
    
    const cityLink = this.props.matchingCities.filter(function(city) {if (city.name == cityName) {return city.link}});
    this.props.fetchWeatherForCity(cityLink[0].link);
  }

  render() {
    return (
        <Autocomplete
          getItemValue={(item) => item.name}
          items={this.props.matchingCities}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.name}
            </div>
          }
          value={this.props.partialCity}
          onChange={(e) => this.cityKeypress(e.target.value)}
          onSelect={(val) => this.onChangeSelectedCity(val)}
        />
      );
  }
}

WeatherForm.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  partialCity: PropTypes.string,
  matchingCities: PropTypes.array,
  changePartialCity: PropTypes.func,
  fetchMatchingCities: PropTypes.func,
  changeSelectedCity: PropTypes.func,
  fetchWeatherForCity: PropTypes.func,
};

export default WeatherForm;
