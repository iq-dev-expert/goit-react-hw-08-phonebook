import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { useAuth } from 'hooks/useAuth';

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
