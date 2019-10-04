import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { IUseFormFetchResponse } from "../../types";
import { hasKey } from "../../utils";

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: "green"
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: "yellow"
  }
}));

interface IToastProps extends IUseFormFetchResponse {
  className?: string;
}

const Toast: React.FC<IToastProps> = ({ message, status, className }) => {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(true);

  function handleClose(event: React.FormEvent<HTMLFormElement>, reason: string) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
    >
      <SnackbarContent
        message={<span id="message-id">{message}</span>}
        className={hasKey(classes, status) ? clsx(classes[status], className) : className}
      />
    </Snackbar>
  );
};

export default Toast;
