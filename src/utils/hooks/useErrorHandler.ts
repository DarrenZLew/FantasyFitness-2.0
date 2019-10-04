import { useState } from "react";

export const useErrorHandler = (initialState: string) => {
  const [error, setError] = useState(initialState);
  const showError = (errorMessage: string) => {
    setError(errorMessage);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };
  return { error, showError };
};
