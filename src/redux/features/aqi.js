import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '6a94543e03e99aa16676be688ff283c1';

export const fetchAqiData = createAsyncThunk(
  'aqi/fetchAqiData',
  async ({ lat, lon }, { rejectWithValue }) => {
    console.log(lat, lon);
    try {
      const respond = await axios(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      console.log(respond);
      return respond.data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

const initialState = {
  aqiData: {},
  loading: 'idle',
  error: null,
};

export const aqiSlice = createSlice({
  name: 'aqi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAqiData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchAqiData.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.aqiData = action.payload;
      })
      .addCase(fetchAqiData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

export default aqiSlice.reducer;
