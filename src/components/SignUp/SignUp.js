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

    _checkPwd(input){
	const reg = /^[A-Za-z]\w{10, 30}$/;
	if(/^[a-zA-Z0-9!@#$%^&*()?_~]{6,15}$/.test(input)){
	    return true;
	}else{
	    return false;
	}
    }

    _validate_password(){
	if(this.props.password !== this.props.confirm_password){
	    this._notificationSystem.addNotification({
		message: "패스워드 확인을 위해 동일한 패스워드를 입력바랍니다. ",
		level: 'error'
	    });
	    return false;
	}
	if(this.props.password.length < 10 || this.props.password.length > 30){
	    this._notificationSystem.addNotification({
		message: "패스워드는 숫자 포함 10글자 이상입력해야 합니다. (30자리이하)",
		level: 'error'
	    });
	    return false;
	}
	if(!this._checkPwd(this.props.password)){
	    this._notificationSystem.addNotification({
		message: "숫자, 특수문자는 반드시 포함되어져야 합니다.",
		level: 'error'
	    });
	    return false;
	}
	return true;
    }

    _validate_phone(){
	if(this.props.phone.length===13 && this.props.phone.length===11){
	    this._notificationSystem.addNotification({
		message: "핸드폰 번호 양식이 틀립니다.(010-1234-1234 혹은 01012341234)",
		level: 'error'
	    });
	    return false;	    
	}
	return true;
    }

    onSignUp(){
	if(this._validate_id() && this._validate_password() && this._validate_phone()){
	    this._validate_id();
	    this._validate_password();
	    this._validate_phone();
	    let params = new FormData();
	    params.append('user_id', this.props.user_id);
	    params.append('password', this.props.password);
	    params.append('password1', this.props.confirm_password);
	    params.append('name', this.props.name);
	    params.append('phone', this.props.phone);
	    params.append('email', this.props.email);
	    params.append('profile_photo', this.props.image);
	    axios.post('/user/signup/',
		       params
		      )
		.then((response) =>{
		    console.log(response.data);
		    this.props.confirmPassword('');	
		    this.props.setPassword('');
		    this.props.history.push('/login');
		})
		.catch((error)=>{
		    console.log("error");
		    console.log(error.response);
		});

	}
	this.props.confirmPassword('');	
	this.props.setPassword('');
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
		image={this.props.image}
		setId={this.props.setId}
		setPassword={this.props.setPassword}
		confirmPassword={this.props.confirmPassword}
		setEmail={this.props.setEmail}
		setPhone={this.props.setPhone}
		setName={this.props.setName}
		setMyImg={this.props.setMyImg}
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
	name: state.user.name,
	image: state.user.image
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
	setId: (user_id) => { dispatch(actions.setId(user_id)); },
	setPassword: (password) => { dispatch(actions.setPassword(password));},
	confirmPassword: (confirm_password) => { dispatch(actions.confirmPassword(confirm_password)); },
	setEmail: (email) => { dispatch(actions.setEmail(email)); },
	setPhone: (phone) => { dispatch(actions.setPhone(phone)); },
	setName: (name) => { dispatch(actions.setName(name)); },
	setMyImg: (image) => { dispatch(actions.setMyImg(image)); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
