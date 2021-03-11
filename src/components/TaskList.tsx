import React, { FC } from "react";
import TaskListItem from "../containers/TaskListItem";
import { Todo } from "../reducers/todos";
import AddTodo from "../containers/AddTodo";
import Grid from "@material-ui/core/Grid";

interface TaskListProps {
  tasks: Todo[];
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <AddTodo />
        </Grid>
        {tasks.map((task: Todo) => {
          if (task.status === "backlog") {
            return <TaskListItem key={task.id} task={task} />;
          }
          return false;
        })}
      </Grid>
      <Grid item xs={4}>
        {tasks.map((task: Todo) => {
          if (task.status === "inprogress") {
            return <TaskListItem key={task.id} task={task} />;
          }
          return false;
        })}
      </Grid>
      <Grid item xs={4}>
        {tasks.map((task: Todo) => {
          if (task.status === "done") {
            return <TaskListItem key={task.id} task={task} />;
          }
          return false;
        })}
      </Grid>
    </>
  );
};

export default TaskList;
