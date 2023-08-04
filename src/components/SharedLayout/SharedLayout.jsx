import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <>
        <Header />

        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </>
    )
  );
};
