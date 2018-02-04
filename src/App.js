import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Movies from './Movies'

const App = () =>
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route exact path='/' component={Movies} />
        <Route path='/test' component={Test} />
      </Switch>
    </div>
  </Router>

export default App

const Test = () =>
  <h1>TEST</h1>
