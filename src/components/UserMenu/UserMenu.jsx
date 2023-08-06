import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="flex items-center">
      <span className="mr-10 text-violet-500">{user.email}</span>
      <button
        type="button"
        onClick={() => logOut()}
        className="nav-link-primary"
      >
        Logout
      </button>
    </div>
  );
};
