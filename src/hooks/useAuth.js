import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/reduxAuth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const IsRefreshing = useSelector(selectIsRefreshing);
};
