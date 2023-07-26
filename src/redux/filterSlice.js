import { createSlice } from '@reduxjs/toolkit';
import { deleteContact } from 'redux/operations';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      return (state = action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(deleteContact.fulfilled, () => initialState);
  },
});

export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
