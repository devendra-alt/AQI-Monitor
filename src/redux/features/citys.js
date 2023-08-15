import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCitys = createAsyncThunk(
  'citys/fetchCitys',
  async (_, { rejectWithValue }) => {
    try {
      const respond = await axios(
        'https://json.extendsclass.com/bin/d8d76772e5e0'
      );
      return respond.data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

const initialState = {
  cityList: [],
  loading: 'idle',
  error: null,
};

export const citysSlice = createSlice({
  name: 'citys',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCitys.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchCitys.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.cityList = action.payload;
      })
      .addCase(fetchCitys.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default citysSlice.reducer;
