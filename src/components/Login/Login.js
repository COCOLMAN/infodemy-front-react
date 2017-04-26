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
	    let params = new URLSearchParams();
	    params.append('id', this.props.user_id);
	    params.append('password', this.props.password);
	    axios.post('http://infodemy-dev-env.ap-northeast-2.elasticbeanstalk.com/' + 'user/' + 'login/', 
		       params
		      )
		.then((response)=>{
		    this.props.setToken(response.data.Token);
		    localStorage.setItem('token', response.data.Token);
		    axios.defaults.headers.common['Authorization'] = 'Token ' +this.props.token;
		    this.props.history.push('/admin');
		})
		.catch(()=>{
		    this._notificationSystem.addNotification({
			message: "입력한 정보가 정확하지 않습니다.",
			level: 'warning'
		    });
		});
	    this.props.inputPassword('');
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
	password: state.user.password,
	token: state.user.token
    };
};


const mapDispatchToProps = (dispatch) => {
    return{
	inputId: (user_id) => { dispatch(actions.setId(user_id));},
	inputPassword: (password) => { dispatch(actions.setPassword(password)); },
	setToken: (token) => { dispatch(actions.setToken(token)); }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
