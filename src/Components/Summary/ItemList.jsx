import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import { useHistory } from "react-router-dom";

export default function ItemsList(props) {
  const history = useHistory();
  return (
    <React.Fragment>
 
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              // selected={selectedIndex === 0}
              onClick={(event) => {
                history.push("/summary?skey=" + props.itemName);
              }}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={props.itemName} />
            </ListItem>
          </List>

    </React.Fragment>
  );
}
