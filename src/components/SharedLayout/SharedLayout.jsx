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
          <div className="px-5 py-10 mx-auto w-3/4">
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </>
    )
  );
};
