import React from 'react';
import { Link } from 'react-router-dom';

import TextForm, { PasswordForm } from './TextForm';


export default class FormContainer extends React.Component{
    render(){
	return(
	    <div className='form-horizontal m-t-20'>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <TextForm holder='ID'
			    onChange={ this.props.inputId }
			    value={this.props.user_id}
			    />
		  <i className='md md-account-circle form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <PasswordForm holder='Password'
				onChange={ this.props.inputPassword }
				value={ this.props.password }
			    />
		  <i className='md md-vpn-key form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group text-right m-t-20'>
		<div className='col-xs-12'>
		  <button
		    className='btn btn-primary btn-custom w-md waves-effect waves-light'
		    type='submit'
		    onClick={this.props.onLogin}>
		    Log In
		  </button>
		</div>
	      </div>
	      <div className='form-group m-t-30'>
		<div className='col-sm-7'>
		  <Link className='text-muted' to='/login'>
		    <i className='fa fa-lock m-r-5'/>
		    비밀번호 찾기
		  </Link>
		</div>
		<div className='col-sm-5 text-right'> 
		    <Link className='text-muted' to='/login'>
		      회원가입
		    </Link>
		  </div>
		</div>
	      </div>

	);
    }
}
