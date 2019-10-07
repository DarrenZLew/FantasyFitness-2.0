import { useState, useEffect } from "react";
import { fetching, queryString } from "../../utils";
import { IFetchProps } from "../../types";

// Deprecated
interface IUseFetchProps extends IFetchProps {
  queryParams?: any;
  initialResponse?: any;
}

export const useFetch = ({
  url,
  queryParams,
  bodyParams,
  initialResponse = {}
}: IUseFetchProps) => {
  const [response, setResponse] = useState(initialResponse);
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);

  let updatedUrl = url;
  if (queryParams) {
    updatedUrl += queryString(queryParams);
  }

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await fetching({ url: updatedUrl, bodyParams });
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
    };
  }, [updatedUrl, bodyParams]);
  return { response, error, loading };
};
