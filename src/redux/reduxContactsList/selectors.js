import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  }
);
