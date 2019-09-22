import { useState, useEffect } from "react";
import { fetching } from "../../utils";

export const useFetch = ({ url, queryParams }) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await fetching({ url, queryParams });
        if (!didCancel) {
          setResponse(results);
          setIsLoading(false);
        }
      } catch (error) {
        if (!didCancel) {
          setError(error);
        }
      }
    };
    fetchData();

    return () => {
      didCancel = true;
    }
  }, [url, queryParams]);
  return { response, error, loading };
};