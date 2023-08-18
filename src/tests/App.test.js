import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('it should render App', () => {
  it('should render App', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
