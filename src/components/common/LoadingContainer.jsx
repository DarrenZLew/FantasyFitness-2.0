import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingContainer = ({ loading, children }) => {
  if (loading) {
    return <CircularProgress />;
  }
  return children;
};

export default LoadingContainer;
