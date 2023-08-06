import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from 'redux/reduxContactsList/operations';
import {
  logIn,
  logOut,
  refreshUser,
  register,
} from 'redux/reduxAuth/operations';

const initialState = { isLoading: false, error: null };

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...getActions('pending')), onPending)
      .addMatcher(isAnyOf(...getActions('rejected')), onRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), onFulfilled);
  },
});

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const onFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const extraActions = [
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
  logIn,
  logOut,
  refreshUser,
  register,
];
const getActions = type => extraActions.map(action => action[type]);

export const globalReducer = globalSlice.reducer;
