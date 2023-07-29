import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  contactsReducer,
  contactsSlice,
} from 'redux/reduxContactsList/contactsSlice';
import {
  filterReducer,
  filterSlice,
} from 'redux/reduxContactsList/filterSlice';
import { authReducer, authSlice } from './reduxAuth/authSlice';

const rootReducer = combineReducers({
  [authSlice.name]: authReducer,
  [contactsSlice.name]: contactsReducer,
  [filterSlice.name]: filterReducer,
});

export const store = configureStore({ reducer: rootReducer });
