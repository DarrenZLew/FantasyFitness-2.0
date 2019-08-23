import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function MenuRouteList({ listItems }) {
  return (
    <List>
      {listItems.map(({ name, link, Icon }, index) => (
        <ListItem button component={Link} to={link} key={index}>
          {Icon ? (
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
          ) : null}
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
}
