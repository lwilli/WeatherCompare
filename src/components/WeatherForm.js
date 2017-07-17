import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';

class WeatherForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.cityKeypress = this.cityKeypress.bind(this);
    this.onChangeSelectedCity = this.onChangeSelectedCity.bind(this);
  }

  componentDidMount() {
    // Focus the input
    if (this.props.cityNum === 0) {this.input.focus();}
  }

  cityKeypress(newPartialCity) {
    this.props.changePartialCity(newPartialCity, this.props.cityNum);
    this.props.fetchMatchingCities(newPartialCity, this.props.cityNum);
  }

  onChangeSelectedCity(cityName) {
    this.props.changeSelectedCity(cityName, this.props.cityNum);
    
    // set display to true for next weather form
    this.props.changeShouldDisplay(this.props.cityNum + 1, true);

    //TODO: set focus to next weather input 

    const cityLink = this.props.matchingCities.filter(function(city) {if (city.name == cityName) {return city.link}});
    this.props.fetchWeatherForCity(cityLink[0].link, this.props.cityNum);
  }

  render() {
    return (
        <Autocomplete
          ref={el => this.input = el}
          getItemValue={(item) => item.name}
          items={this.props.matchingCities}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.name}
            </div>
          }
          value={this.props.partialCity}
          onChange={(e) => this.cityKeypress(e.target.value)}
          onSelect={(val) => this.onChangeSelectedCity(val, this.props.cityNum)}
        />
      );
  }
}

WeatherForm.propTypes = {
  cityNum: PropTypes.number,
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
  changeShouldDisplay: PropTypes.func,
};

export default WeatherForm;
