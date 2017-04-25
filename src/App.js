import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login } from './components/Login/';
import { SignUp } from './components/SignUp/';


class App extends Component {
  render() {
    return (
	<Router>
	  <div>
	    <Route exact path='/' />
	    <Route path='/login' component={Login}/>
	    <Route path='/signup' component={SignUp}/>
	  </div>
	</Router>
    );
  }
}

export default App;
