import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rockets';
import dragonReducer from './dragons/dragons';

const reducer = combineReducers({
  mission: missionReducer,
  rocket: rocketReducer,
  dragon: dragonReducer,
});

// const rootReducer = combineReducers({ potato: potatoReducer, tomato: tomatoReducer });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
