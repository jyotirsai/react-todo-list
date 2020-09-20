import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const TaskList = (props) => {
  const deleteItem = () => {
    props.deleteTask(props.id);
  };
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.task} />
        <IconButton onClick={deleteItem}>
          <Delete />
        </IconButton>
      </ListItem>
      <Divider />
    </List>
  );
};

export default TaskList;
