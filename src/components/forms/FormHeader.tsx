import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

const FormHeader: React.FC<TypographyProps> = ({ children, variant = "h5" }) => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default FormHeader;
