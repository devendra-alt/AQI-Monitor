import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
  screen
} from '@testing-library/react';
import store from '../redux/store';
import App from '../App';

describe('it should test Home', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it('should render loading spinner', () => {
    expect(
      screen.queryByLabelText('ball-triangle-loading')
    ).toBeInTheDocument();
  });
  it('should render list of items', async () => {
    await waitForElementToBeRemoved(() => screen.queryByLabelText('ball-triangle-loading'));
    const aqiList = await screen.queryAllByLabelText('city');
    expect(aqiList.length).toBeGreaterThan(0);
  });
  it('should naviage to Kuala Lumpur city', async () => {
    await waitForElementToBeRemoved(() => screen.queryByLabelText('ball-triangle-loading'));
    const cityDetailsBtn = screen.queryByTestId('1458988644');
    fireEvent.click(cityDetailsBtn);
    await waitForElementToBeRemoved(() => screen.queryByLabelText('ball-triangle-loading'));
    const data = screen.queryAllByText('Kuala Lumpur');
    expect(data[1]).toBeInTheDocument();
  });
});
