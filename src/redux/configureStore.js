import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rockets';
import dragonReducer from './dragons/dragons';

const reducer = combineReducers({
  missionReducer, rocketReducer, dragonReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
