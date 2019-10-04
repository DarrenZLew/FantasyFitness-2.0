import React from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Divider,
  Theme
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImageIcon from "@material-ui/icons/Image";
import { IGeneralProps } from "../../../../../types";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    textTransform: "uppercase"
  },
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

const GeneralAvatar: React.FC<IGeneralProps> = props => {
  const classes = useStyles({});
  const { className, data } = props;
  const AvatarImage = () =>
    data.avatar ? (
      <Avatar className={classes.avatar} src={data.avatar} />
    ) : (
      <Avatar className={classes.avatar}>
        <ImageIcon />
      </Avatar>
    );

  return (
    <Card className={className}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography variant="h3" className={classes.header}>
              {data.name}
            </Typography>
          </div>
          <AvatarImage />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button className={classes.uploadButton} variant="text">
          Upload picture
        </Button>
        <Button variant="text">Remove picture</Button>
      </CardActions>
    </Card>
  );
};

export default GeneralAvatar;
