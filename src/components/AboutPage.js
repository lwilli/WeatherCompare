import React from 'react';
import {Link} from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div style={{margin: '1.5em'}}>
      <h2 className="alt-header">About</h2>
      <p>
        WeatherCompare is a simple web app built by Logan Williams that lets you compare the current weather between two cities.
      </p>
    </div>
  );
};

export default AboutPage;
