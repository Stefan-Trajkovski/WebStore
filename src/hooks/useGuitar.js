import { useQuery } from '@apollo/client';

function useGuitar(query, variables = {}) {
  const { data, loading, error } = useQuery(query, {
    variables
  });

  return {
    data,
    loading,
    error,
  };
}

export default useGuitar;