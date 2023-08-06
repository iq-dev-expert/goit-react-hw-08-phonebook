import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="flex">
      <NavLink to="/" className="nav-link-primary mr-10">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className="nav-link-primary">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
