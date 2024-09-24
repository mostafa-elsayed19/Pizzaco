import { useEffect, useState } from "react";

type FetchFunction<T> = () => Promise<T[]>;

export function useDataFetch<T>(fetchFunction: FetchFunction<T>): {
  data: T[] | null; // Define data as T[] or null
  loading: boolean; // Loading state
  error: Error | null; // Error state
} {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
}
