import { useState, useEffect } from 'react';
import sanityClient from '@/client';

const useFetchData = <T>(query: string, initialState: T[]): [T[], boolean] => {
  const [data, setData] = useState<T[]>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await sanityClient.fetch<T[]>(query);
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]); // Include query in the dependency array

  return [data, isLoading];
};

export default useFetchData;
