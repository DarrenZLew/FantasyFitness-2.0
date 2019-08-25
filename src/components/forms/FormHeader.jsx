import React from "react";
import Typography from "@material-ui/core/Typography";

const FormHeader = ({ children, variant = "h5", component = null }) => {
  return (
    <Typography component={component} variant={variant}>
      {children}
    </Typography>
  );
};

export default FormHeader;
