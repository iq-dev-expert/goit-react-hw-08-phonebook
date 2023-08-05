import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className="text-xl font-semibold">
      <div className="mx-auto flex w-3/4 items-center justify-between rounded p-5 shadow-custom-shadow">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
