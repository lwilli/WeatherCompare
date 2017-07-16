import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        WeatherCompare is a simple web app built by Logan Williams that lets you compare weather between two cities.
      </p>
    </div>
  );
};

export default AboutPage;
