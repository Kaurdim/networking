import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppHeader } from './appHeader/AppHeader';
import { EmployeeList } from './employeeList/EmployeeList';
import { EmployeeProfile } from './employeeProfile/EmployeeProfile';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader/>
      <Switch>
        <Route exact path='/' component={EmployeeList} />
        <Route path='/employee-profile/:id' component={EmployeeProfile} />
        <Route component={() => (<p>Такой страницы не существует (404)</p>)} />
      </Switch>
    </div>
  );
}

export default App;
