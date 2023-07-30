import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/reduxAuth/selectors';
import * as actions from 'redux/reduxAuth/operations';
import { useCallback } from 'react';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const register = ({ name, email, password }) =>
    dispatch(actions.register({ name, email, password }));

  const logIn = ({ email, password }) =>
    dispatch(actions.logIn({ email, password }));

  const logOut = () => dispatch(actions.logOut());

  const refreshUser = useCallback(
    () => dispatch(actions.refreshUser()),
    [dispatch]
  );

  return {
    isLoggedIn,
    user,
    isRefreshing,
    error,
    register,
    logIn,
    logOut,
    refreshUser,
  };
};
