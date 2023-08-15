import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './features/countries';
import citysReducer from './features/citys';
import aqiReducer from './features/aqi';

export default configureStore({
  reducer: {
    countries: countryReducer,
    citys: citysReducer,
    aqi: aqiReducer,
  },
});
