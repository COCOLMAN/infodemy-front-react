import React from 'react';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';
import axios from 'axios';

import * as actions from '../../actions/';

import Container from './Container';


class SignUp extends React.Component{
    constructor(props){
	super(props);
	this.onSignUp = this.onSignUp.bind(this);
    }

    componentWillMount(){
	axios.defaults.baseURL = 'http://infodemy-dev-env.ap-northeast-2.elasticbeanstalk.com';
    }

    componentDidMount(){
	this._notificationSystem = this.refs.notificationSystem;
    }

    async _validate_id(){
	if (this.props.user_id===''){
	    this._notificationSystem.addNotification({
		message: 'ID는 필수입니다.',
		level: 'error'
	    });
	    return false;
	}
	try{
	    const response = await axios.post('user/check_id/',
					      {
						  check_id: this.props.user_id
					      });
	    if (response.data =='False'){
		this._notificationSystem.addNotification({
		    message: "이미 존재하는 ID입니다.",
		    level: 'warning'
		});
		return false;
	    }
	}
	catch(e){
	    console.log("internet 연결 문제");
	}
	return true;
    }

    _validate_password(){
	if(this.props.password !== this.props.confirm_password){
	    this._notificationSystem.addNotification({
		message: "패스워드 확인을 위해 동일한 패스워드를 입력바랍니다. ",
		level: 'error'
	    });
	    return false;
	}
	console.log(this.props.password.length);
	if(this.props.password.length < 10){
	    this._notificationSystem.addNotification({
		message: "패스워드는 10글자 이상입력해야 합니다. ",
		level: 'error'
	    });	    
	}

	return true;
    }

    _validate_phone(){

    }

    _validate_email(){

    }

    _validate_name(){

    }

    onSignUp(){
	this.props.confirmPassword('');	
	this.props.setPassword('');
	console.log(this.props.confirm_password);
	console.log(this.props.password);
    }

    render(){
	return(
	    <div>
	      <Container
		content='Sign Up'
		user_id={this.props.user_id}
		password={this.props.password}
		confirm_password={this.props.confirm_password}
		email={this.props.email}
		name={this.props.name}
		phone={this.props.phone}
		setId={this.props.setId}
		setPassword={this.props.setPassword}
		confirmPassword={this.props.confirmPassword}
		setEmail={this.props.setEmail}
		setPhone={this.props.setPhone}
		setName={this.props.setName}
		onSignUp={this.onSignUp}
		/>
	      <NotificationSystem ref="notificationSystem"/>
	    </div>
	);
    }
}

const mapStateToProps = (state)=>{
    return {
	user_id: state.user.user_id,
	password: state.user.password,
	confirm_password: state.user.confirm_password,
	email: state.user.email,
	phone: state.user.phone,
	name: state.user.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
	setId: (user_id) => { dispatch(actions.setId(user_id)); },
	setPassword: (password) => { dispatch(actions.setPassword(password));},
	confirmPassword: (confirm_password) => { dispatch(actions.confirmPassword(confirm_password)); },
	setEmail: (email) => { dispatch(actions.setEmail(email)); },
	setPhone: (phone) => { dispatch(actions.setPhone(phone)); },
	setName: (name) => { dispatch(actions.setName(name)); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
