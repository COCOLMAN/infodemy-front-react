import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login } from './components/Login/';


class App extends Component {
  render() {
    return (
	<Router>
	  <div>
	    <Route path='/login' component={Login}/>
	  </div>
	</Router>
    );
  }
}

export default App;
