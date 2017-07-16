import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  weatherReducer,
  routing: routerReducer
});

export default rootReducer;
