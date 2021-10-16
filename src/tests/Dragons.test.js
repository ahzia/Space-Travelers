import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Dragons from '../components/Dragons';
import store from '../redux/configureStore';

describe('Component test snapshot', () => {
  it('Dragons renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Dragons />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
