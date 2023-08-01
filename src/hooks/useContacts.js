import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'redux/reduxContactsList/operations';
import {
  selectContacts,
  selectError,
  selectFilterValue,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/reduxContactsList/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilterValue);
  const filteredContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  const fetchContacts = useCallback(
    () => dispatch(actions.fetchContacts()),
    [dispatch]
  );

  const addContact = ({ name, number }) =>
    dispatch(actions.addContact({ name, number }));

  const deleteContact = contactId => dispatch(actions.deleteContact(contactId));

  const editContact = (contactId, editedContact) =>
    dispatch(actions.editContact({ contactId, editedContact }));

  return {
    contacts,
    isLoading,
    error,
    filter,
    filteredContacts,
    fetchContacts,
    addContact,
    deleteContact,
    editContact,
  };
};
