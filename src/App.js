import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import { TaskProvider } from './context/TaskContext';

const App = () => (
  <Router>
    <TaskProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/edit-task/:id" component={EditTask} />
      </Switch>
    </TaskProvider>
  </Router>
);

export default App;
