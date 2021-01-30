import React, { FC } from "react";
import TaskListItem from "./TaskListItem";
import AddTodo from "../containers/AddTodo";
import Grid from "@material-ui/core/Grid";

interface TaskListProps {
  tasks: any;
}

// TODO: statusごとにタスク分ける
const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <AddTodo />
        </Grid>
        <TaskListItem taskItems={tasks} />
      </Grid>
      <Grid item xs={4}>
        <TaskListItem taskItems={tasks} />
      </Grid>
      <Grid item xs={4}>
        <TaskListItem taskItems={tasks} />
      </Grid>
    </>
  );
};

export default TaskList;
