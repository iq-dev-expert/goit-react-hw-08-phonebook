import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className="nav-link-primary mr-10">
        Register
      </NavLink>
      <NavLink to="/login" className="nav-link-primary">
        Login
      </NavLink>
    </div>
  );
};
