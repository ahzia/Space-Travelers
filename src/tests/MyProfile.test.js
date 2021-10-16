import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import store from '../redux/configureStore';

describe('Component test snapshot', () => {
  it('Profile renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
