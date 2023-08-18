import '@testing-library/jest-dom';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../redux/store';
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { screen } from '@testing-library/react';

describe('should test city details page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it('should render city details page', async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByLabelText('ball-triangle-loading')
    );
    const cityDetailsBtn = screen.queryByTestId('1458988644');
    fireEvent.click(cityDetailsBtn);
    await waitForElementToBeRemoved(() =>
      screen.queryByLabelText('ball-triangle-loading')
    );
    expect(screen.queryByLabelText('city-name')).toBeInTheDocument();
  });
});
