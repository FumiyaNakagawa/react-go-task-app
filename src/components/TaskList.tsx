import React, { FC } from "react";
import TaskListItem from "../containers/TaskListItem";
import { Todo } from "../reducers/todos";
import AddTodo from "../containers/AddTodo";
import Grid from "@material-ui/core/Grid";

interface TaskListProps {
  tasks: Todo[];
}

// TODO: statusごとにタスク分ける
const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <AddTodo />
        </Grid>
        {tasks.map((task: Todo) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </Grid>
      <Grid item xs={4}>
        {/* <TaskListItem taskItems={tasks} /> */}
      </Grid>
      <Grid item xs={4}>
        {/* <TaskListItem taskItems={tasks} /> */}ï
      </Grid>
    </>
  );
};

export default TaskList;
