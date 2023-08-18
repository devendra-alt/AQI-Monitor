import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
  screen,
  waitFor,
} from '@testing-library/react';
import store from '../redux/store';
import App from '../App';

describe('should test city details page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it('should render city details page', async () => {
    await waitFor(() => {
      const loading = screen.queryByLabelText('ball-triangle-loading');
      expect(loading).toBeNull();
    });
    const cityDetailsBtn = screen.queryByTestId('1458988644');
    fireEvent.click(cityDetailsBtn);
    await waitFor(() => {
      const loading = screen.queryByLabelText('ball-triangle-loading');
      expect(loading).toBeNull();
    });
    expect(screen.queryByLabelText('city-name')).toBeInTheDocument();
  });
});
