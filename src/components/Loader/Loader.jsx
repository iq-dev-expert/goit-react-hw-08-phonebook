import { useEffect } from 'react';
import { useContacts } from 'hooks/useContacts';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const Loader = () => {
  const { isLoading } = useContacts();

  useEffect(() => {
    isLoading ? Loading.dots() : Loading.remove();
  });

  return null;
};
