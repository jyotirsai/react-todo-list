import React, { useState } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@material-ui/core";
import TaskList from "./TaskList";
import useStyles from "./styles.js";

const AddItem = () => {
  const classes = useStyles();

  const [taskItem, setTaskItem] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const handleChange = (event) => {
    const taskText = event.target.value;
    setTaskItem(taskText);
  };

  const submitTask = () => {
    setTasksArray((prevTasks) => {
      return [...prevTasks, taskItem];
    });
    setTaskItem("");
  };

  const deleteTask = (id) => {
    setTasksArray((prevTasks) => {
      return prevTasks.filter((taskItem, taskid) => {
        return taskid !== id;
      });
    });
  };

  return (
    <div>
      <Paper elevation={3} className={classes.listSize}>
        <Typography align="center" variant="h2">
          My To-Do List
        </Typography>
        <Grid container spacing={1} className={classes.listSpacing}>
          <Grid item xs={9} sm={10} md={10} lg={11}>
            <TextField
              color="secondary"
              autoComplete="false"
              fullWidth
              id="task"
              label="Enter Task"
              variant="outlined"
              value={taskItem}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              className={classes.buttonSize}
              onClick={submitTask}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <br />
        {tasksArray.map((task, id) => (
          <TaskList deleteTask={deleteTask} task={task} id={id} />
        ))}
      </Paper>
    </div>
  );
};

export default AddItem;
