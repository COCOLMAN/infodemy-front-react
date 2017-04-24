import React from 'react';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';
import axios from 'axios';

import * as actions from '../../actions/';

import Container from './Container';



class Login extends React.Component{
    constructor(props){
	super(props);
	this.userLogin = this.userLogin.bind(this);
    }

    componentDidMount(){
	this._notificationSystem = this.refs.notificationSystem;
    }

    userLogin() {
	if (this.props.user_id === '' || this.props.password ===''){
	    this._notificationSystem.addNotification({
		message: 'ID와 Password를 모두 입력해주세요.',
		level: 'error'
	    });
	} else {
	    axios.post('http://infodemy-dev-env.ap-northeast-2.elasticbeanstalk.com/' + 'user/' + 'login/', {
		id: this.props.user_id,
		password: this.props.password
	    })
		.then((response)=>{
		    console.log(response.data);
		});

	}
    }

    render(){
	return(
	    <div>
	      <Container content='Login'
			 user_id={this.props.user_id}
			 password={this.props.password}
			 inputId={ this.props.inputId }
			 inputPassword={ this.props.inputPassword }
			 onLogin={this.userLogin}
			 />
	      <NotificationSystem ref="notificationSystem"/>
	    </div>
	);
    }
}


const mapStateToProps = (state) => {
    return {
	user_id: state.user.user_id,
	password: state.user.password
    };
};


const mapDispatchToProps = (dispatch) => {
    return{
	inputId: (user_id) => { dispatch(actions.inputId(user_id));},
	inputPassword: (password) => { dispatch(actions.inputPassword(password)); }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
