import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
