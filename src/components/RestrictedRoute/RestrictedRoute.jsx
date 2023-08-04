import { Navigate } from 'react-router';
import { useAuth } from 'hooks/useAuth';
import PropTypes from 'prop-types';

export const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};
