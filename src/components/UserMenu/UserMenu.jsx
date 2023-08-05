import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="flex items-center">
      <span className="mr-10 text-violet-500">{user.email}</span>
      <button
        type="button"
        onClick={() => logOut()}
        className="rounded-xl bg-violet-300 px-3 py-1 hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white"
      >
        Logout
      </button>
    </div>
  );
};
