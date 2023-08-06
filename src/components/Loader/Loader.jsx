import { useEffect } from 'react';
import { useGlobal } from 'hooks/useGlobal';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const Loader = () => {
  const { isLoading } = useGlobal();

  useEffect(() => {
    isLoading ? Loading.dots() : Loading.remove();
  });

  return null;
};
