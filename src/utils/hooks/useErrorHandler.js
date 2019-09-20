import { useState } from "react";

export const useErrorHandler = initialState => {
  const [error, setError] = useState(initialState);
  const showError = errorMessage => {
    setError(errorMessage);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };
  return { error, showError };
};
