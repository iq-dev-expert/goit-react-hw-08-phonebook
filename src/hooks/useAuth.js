import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/reduxAuth/selectors';
import * as actions from 'redux/reduxAuth/operations';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const IsRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  const register = ({ name, email, password }) => {
    dispatch(actions.register({ name, email, password }));
  };

  return { register };
};
