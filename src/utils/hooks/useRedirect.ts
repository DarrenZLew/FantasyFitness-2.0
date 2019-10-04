import { useState, useEffect } from "react";

interface IUseRedirectProps {
  redirectLogic: boolean;
  delay: number;
}

export const useRedirect = (props: IUseRedirectProps) => {
  const { redirectLogic, delay } = props;
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    let timer: number;
    if (redirectLogic) {
      timer = <any>setTimeout(() => {
        setRedirect(true);
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [redirectLogic, delay]);

  return redirect;
};
