import { useCallback, useEffect, useState } from 'react';

const useQuery = <T>(
  getRequest: (options: any) => Promise<T>,
  options?: any
): { data: T, isLoading: boolean, error: any, progress: number, refetch: () => void } => {
  const [data, setData] = useState<T>({} as T);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const result = await getRequest({ ...options, setIsLoading, onDownloadProgress: setProgress });
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
      setProgress(0);
    }
  }, [getRequest]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, progress, refetch };
};

export default useQuery;
