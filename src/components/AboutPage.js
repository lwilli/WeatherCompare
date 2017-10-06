import React from 'react';
import {Link} from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div style={{margin: '1.5em'}}>
      <h2 className="alt-header">About</h2>
      <p>WeatherComp is a simple web app that lets you compare the current weather between two cities.</p>
      <p>Built by Logan Williams with ReactJS using weather data provided by Dark Sky.</p>
      <a className="powered-by-darksky" href="https://darksky.net/poweredby/">
        <img className="darksky-image-about" src='https://darksky.net/dev/img/attribution/poweredby-oneline.png'/>
      </a>
    </div>
  );
};

export default AboutPage;
