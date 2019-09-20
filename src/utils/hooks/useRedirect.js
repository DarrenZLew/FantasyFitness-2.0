import { useState, useEffect } from "react";

export const useRedirect = props => {
  const { redirectLogic, delay } = props;
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    let timer;
    if (redirectLogic) {
      timer = setTimeout(() => {
        setRedirect(true);
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [redirectLogic, delay]);

  return redirect;
};
