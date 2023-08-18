import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAqiData = createAsyncThunk(
  'aqi/fetchAqiData',
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const respond = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=6a94543e03e99aa16676be688ff283c1`
      );
      const data = respond.json();
      return data;
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
