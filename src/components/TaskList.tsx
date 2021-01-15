import React, { FC } from 'react';
import TaskListItem, { TaskItem } from './TaskListItem';
import AddTodo from './AddTodo';
import Grid from '@material-ui/core/Grid';

const TaskList: FC<{}> = () => {
  const taskItems: TaskItem[] = [
    {
      id: 1,
      task: 'aaaa'
    },
    {
      id: 2,
      task: 'bbbb'
    },
    {
      id: 3,
      task: 'cccc'
    },
  ];

  return (
  <>
    <Grid item xs={4}>
      <Grid item xs={12} >
        <AddTodo/>
      </Grid>
      <TaskListItem taskItems={taskItems}/>
    </Grid>
    <Grid item xs={4}>
      <TaskListItem taskItems={taskItems}/>
    </Grid>
    <Grid item xs={4}>
      <TaskListItem taskItems={taskItems}/>
    </Grid>
  </>
  );
}

export default TaskList;