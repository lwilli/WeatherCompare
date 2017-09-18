import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import Flexbox from 'flexbox-react';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div width='100%' height='100%'>
        <Flexbox className='header' alignItems='center' justifyContent='space-between' alignContent='center'>
          ☰
          <div>WeatherComp</div>
          ↑
        </Flexbox>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
