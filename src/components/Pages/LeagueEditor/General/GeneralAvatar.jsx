import React from "react";
import clsx from "clsx";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles(theme => ({
  details: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  avatar: {
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const GeneralAvatar = props => {
  const classes = useStyles();
  const { className, ...rest } = props;

  const league = {
    name: "League Name",
    type: "League Type",
    avatar: null
  };

  const AvatarImage = () =>
    league.avatar ? (
      <Avatar className={classes.avatar} src={league.avatar} />
    ) : (
      <Avatar className={classes.avatar}>
        <ImageIcon />
      </Avatar>
    );

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h5">
              {league.name}
            </Typography>
          </div>
          <AvatarImage />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button className={classes.uploadButton} color="primary" variant="text">
          Upload picture
        </Button>
        <Button variant="text">Remove picture</Button>
      </CardActions>
    </Card>
  );
};

export default GeneralAvatar;
