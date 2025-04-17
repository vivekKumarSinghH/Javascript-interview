import { useEffect, useState } from "react";
interface UseFetchProps {
  url: string;
}
interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
function useFetch<T = unknown>({ url }: UseFetchProps): UseFetchReturn<T> {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setResponseData(json);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        console.error("useFetch error:", error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
        console.error("useFetch unknown error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data: responseData, loading: isLoading, error: errorMessage };
}

export default useFetch;
