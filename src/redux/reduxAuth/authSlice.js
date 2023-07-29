import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {},
});

export const authReducer = authSlice.reducer;
