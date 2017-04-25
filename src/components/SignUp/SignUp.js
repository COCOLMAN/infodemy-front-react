import React from 'react';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';
import axios from 'axios';

import * as actions from '../../actions/';

import Container from './Container';


export default class SignUp extends React.Component{
    render(){
	return(
	    <div>
	      <Container
		content='Sign Up'
		/>
	    </div>
	);
    }
}
