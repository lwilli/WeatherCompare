import React from 'react';
import { useRouterHistory, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history'

import App from './components/App';
import WeatherPage from './containers/WeatherPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

const history = useRouterHistory(createHistory)({
  basename: '/WeatherCompare'
})

export default (
  <Route history={history} path="/WeatherCompare" component={App}>
    <IndexRoute component={WeatherPage}/>
    <Route path="/WeatherCompare/about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
