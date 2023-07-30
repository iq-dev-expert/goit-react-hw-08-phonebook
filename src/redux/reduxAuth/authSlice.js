import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, onRegLogFulfilled)
      .addCase(logIn.fulfilled, onRegLogFulfilled)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), onRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), onFulfilled);
  },
});

const onRegLogFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const onRejected = (state, action) => {
  state.error = action.payload;
};

const onFulfilled = state => {
  state.error = null;
};

const extraActions = [logIn, logOut, refreshUser, register];
const getActions = type => extraActions.map(action => action[type]);

export const authReducer = authSlice.reducer;
