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
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/task">
          <AppStateProvider>
            <TodoDate />
            <ItemList />
          </AppStateProvider>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
