import React from 'react';
import PropTypes from 'prop-types';
//import { Link, IndexLink } from 'react-router';
import Flexbox from 'flexbox-react';
import Menu from './Menu';

//require('../favicon.ico')

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div width='100%' height='100%'>
        <Menu width={ '200px' }>
            <a id="home" className="menu-item" href="/WeatherCompare/">Home</a>
            <a id="about" className="menu-item" href="/WeatherCompare/about">About</a>
            <div className="made-by-logan">Made by<br/>Logan Williams</div>
            <hr className="menu-divider"/>
            <a className="powered-by-darksky" href="https://darksky.net/poweredby/">
              <img className="darksky-image" src='https://darksky.net/dev/img/attribution/poweredby-darkbackground.png'/>
            </a>
        </Menu>
        <Flexbox className='header-bar' alignItems='center' justifyContent='space-between' alignContent='center'>
          <p id='placeholder-menu'>☰</p>
          <a href="/WeatherCompare/">
            <div id='header-title'>WeatherComp</div> 
          </a>
          <p id='placeholder-menu'>↑</p>
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
