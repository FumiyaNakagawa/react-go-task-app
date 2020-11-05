import React from 'react';
import TaskListItem, { TaskItem } from './components/taskListItem'

import './App.css';

const App = () => {
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
    }
  ];


  
  console.log(taskItems.map(c => c.task))

  return (
    <div>
      <TaskListItem taskItems={taskItems}/>
    </div>
  );
}

export default App;