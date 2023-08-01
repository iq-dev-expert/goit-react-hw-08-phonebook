import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from 'redux/reduxContactsList/operations';

const initialState = { items: [], isLoading: false, error: null };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );

        state.items.splice(index, 1);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );

        state.items.splice(index, 1, action.payload);
      })

      .addMatcher(isAnyOf(...getActions('pending')), onPending)
      .addMatcher(isAnyOf(...getActions('rejected')), onRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), onFulfilled);
  },
});

const onPending = state => {
  state.isLoading = true;
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const onFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const extraActions = [fetchContacts, addContact, deleteContact, editContact];
const getActions = type => extraActions.map(action => action[type]);

export const contactsReducer = contactsSlice.reducer;
