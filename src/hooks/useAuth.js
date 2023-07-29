import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/reduxAuth/selectors';
import * as actions from 'redux/reduxAuth/operations';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  const register = ({ name, email, password }) =>
    dispatch(actions.register({ name, email, password }));

  const logIn = ({ email, password }) =>
    dispatch(actions.logIn({ email, password }));

  const logOut = () => dispatch(actions.logOut());

  return { isLoggedIn, user, register, logIn, logOut };
};
