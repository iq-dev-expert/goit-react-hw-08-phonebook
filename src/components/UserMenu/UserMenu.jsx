import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <p>{user.email}</p>
      <button type="button" onClick={() => logOut()}>
        Logout
      </button>
      <br />
    </div>
  );
};
