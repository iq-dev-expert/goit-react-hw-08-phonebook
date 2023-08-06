import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <>
        <Header />

        <main>
          <div className="mx-auto w-3/4 px-5 py-10">
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        </main>
        <Loader />
      </>
    )
  );
};
