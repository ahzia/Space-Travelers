import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
  missionReducer, rocketReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
