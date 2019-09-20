import React from "react";
import { Toast } from ".";

const ToastContainer = props => {
  if (props.open) {
    return <Toast {...props} />;
  }
  return null;
};

export default ToastContainer;
