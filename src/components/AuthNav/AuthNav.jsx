import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className="mr-10 rounded-xl bg-violet-300 px-3 py-1 hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white"
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className="rounded-xl bg-violet-300 px-3 py-1 hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white"
      >
        Login
      </NavLink>
    </div>
  );
};
