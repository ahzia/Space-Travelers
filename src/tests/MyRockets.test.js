import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyRockets from '../components/MyRockets';

describe('Component test snapshot', () => {
  it('Rockets renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyRockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
