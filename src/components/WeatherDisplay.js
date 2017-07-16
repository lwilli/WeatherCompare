import React from 'react';
import PropTypes from 'prop-types';

class WeatherDisplay extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        {this.props.currentTemperature}
      </div>
    );
  }
}

WeatherDisplay.propTypes = {
  currentTemperature: PropTypes.number
};

export default WeatherDisplay;