import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

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

const Toast = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const { message, status, className } = props;

  function handleClose(event, reason) {
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
        className={clsx(classes[status], className)}
      />
    </Snackbar>
  );
};

export default Toast;
