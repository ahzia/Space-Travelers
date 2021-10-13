import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import spaceReducer from './missions/missions';

const reducer = combineReducers({
  spaceReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
