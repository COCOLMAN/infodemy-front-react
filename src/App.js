import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect,  Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Login } from './components/Login/';
import { SignUp } from './components/SignUp/';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
	<Router>
	  <div>
	    <Route exact path='/' component={Main}/>
	    <Route path='/login' component={Login}/>
	    <Route path='/signup' component={SignUp}/>
	  </div>
	</Router>
    );
  }
}

const mapStateToProps = (state) => {
    return{
	logined: state.user.logined
    };
};

export default connect(mapStateToProps)(App);
