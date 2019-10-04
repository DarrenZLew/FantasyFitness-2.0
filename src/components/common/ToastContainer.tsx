import React from "react";
import { Toast } from ".";
import { IUseFormFetchResponse } from "../../types";

interface IToastContainerProps extends IUseFormFetchResponse {
  className?: string;
  open?: string;
}

const ToastContainer: React.FC<IToastContainerProps> = props => {
  if (props.open) {
    return <Toast {...props} />;
  }
  return null;
};

export default ToastContainer;
