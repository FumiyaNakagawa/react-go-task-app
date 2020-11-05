import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskListItem, { TaskItem } from './components/TaskListItem'

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
      <Header/>
      <TaskListItem taskItems={taskItems}/>
      <Footer/>
    </div>
  );
}

export default App;