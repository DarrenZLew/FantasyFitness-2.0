import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Tooltip,
  Button,
  Typography,
  IconButton,
  TextField,
  Card
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useForm } from "../../../../utils";

const useStyles = makeStyles(theme => ({
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: "block"
  },
  addMember: {
    marginRight: theme.spacing(1)
  },
  contentWrapper: {
    margin: "40px 16px"
  }
}));

const Members = props => {
  const classes = useStyles();

  const { leagueId } = props;

  const useFormProps = {
    url: `http://localhost:5000/league/${leagueId}/member`,
    initialState: { activities: [] },
    onMountPath: "members",
    onMount: true
  };

  const {
    values = { members: [] },
    handleInputChange,
    handleSubmit,
    loading,
    fetchResponse,
    setValues
  } = useForm({ ...useFormProps });
  return (
    <Fragment>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addMember}>
                Add member
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Card>
        <div className={classes.contentWrapper}>
          <Typography color="textSecondary" align="center">
            No members for this league yet
          </Typography>
        </div>
      </Card>
    </Fragment>
  );
};

export default Members;
