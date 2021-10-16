import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Mission';
import App from '../App';
import store from '../redux/configureStore';

describe('Component test snapshot', () => {
  it('Missions renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('App renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
