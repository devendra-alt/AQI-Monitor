import { configureStore } from '@reduxjs/toolkit';
import citysReducer from './features/citys';
import aqiReducer from './features/aqi';

export default configureStore({
  reducer: {
    citys: citysReducer,
    aqi: aqiReducer,
  },
});
