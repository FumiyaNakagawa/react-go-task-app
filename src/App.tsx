import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './containers/TaskList';
import Grid from '@material-ui/core/Grid';

import './App.css';

const App = () => {

  return (
    <div>
      <Grid container spacing={3}>
        <Header/>
        <TaskList/>
        <Footer/>
      </Grid>
    </div>
  );
}

export default App;