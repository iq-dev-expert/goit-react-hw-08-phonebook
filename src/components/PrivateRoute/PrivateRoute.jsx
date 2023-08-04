import { Navigate } from 'react-router';
import { useAuth } from 'hooks/useAuth';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};
