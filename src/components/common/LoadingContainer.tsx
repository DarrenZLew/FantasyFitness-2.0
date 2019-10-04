import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingContainer: React.FC<{ loading?: boolean; children?: React.ReactElement }> = ({
  loading,
  children
}) => {
  if (loading) {
    return <CircularProgress />;
  }
  return <>{children}</>;
};

export default LoadingContainer;
