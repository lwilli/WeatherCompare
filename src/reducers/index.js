import {combineReducers} from 'redux';
import weatherReducer from './weatherReducer';
import {routerReducer} from 'react-router-redux';
import {reducer as burgerMenu} from 'redux-burger-menu';

const rootReducer = combineReducers({
  weatherReducer,
  routing: routerReducer,
  burgerMenu
});

export default rootReducer;
