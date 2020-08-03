import React from 'react';
import Register from "./components/Register";
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import Task from './components/Task';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      
        <PrivateRoute exact path="/task" component={Task}/>
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        {/* <Route path="/" component={Login}/> */}
        {/* <Route path="/">
          <Login />
        </Route> */}
   
    </Router>
  );
}

export default App;
