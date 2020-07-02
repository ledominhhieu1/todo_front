import React from 'react';
import TodoDate from "./components/TodoDate";
import ItemList from "./components/ItemList";
import Register from "./components/Register";
import './App.css';
import { AppStateProvider } from "./AppContext";
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import Task from './components/Task';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/task" component={Task}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute  component={Register} path="/register" exact/>
        <Route path="/" component={Login}/>
        {/* <Route path="/">
          <Login />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
