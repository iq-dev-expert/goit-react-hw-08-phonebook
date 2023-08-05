import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="flex">
      <NavLink
        to="/"
        className="mr-10 rounded-xl bg-violet-300 px-3 py-1 hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className="rounded-xl bg-violet-300 px-3 py-1 hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
