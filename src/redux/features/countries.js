import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const respond = await axios(
        'https://json.extendsclass.com/bin/ac1c2012ce57'
      );
      return respond.data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

const initialState = {
  countriesList: [],
  loading: 'idle',
  error: null,
};

export const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.countriesList = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

export default countrySlice.reducer;
