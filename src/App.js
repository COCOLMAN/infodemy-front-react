import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login } from './components/Login/';
import { SignUp } from './components/SignUp/';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
	<Router>
	  <div>
	    <Route path='/admin' component={Main}/>
	    <Route path='/login' component={Login}/>
	    <Route path='/signup' component={SignUp}/>
	  </div>
	</Router>
    );
  }
}

export default App;
