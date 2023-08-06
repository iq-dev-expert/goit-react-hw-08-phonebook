import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/reduxGlobal/selectors';

export const useGlobal = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    isLoading,
    error,
  };
};
