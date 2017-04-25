import React from 'react';
import { Link } from 'react-router-dom';

import TextForm, { PasswordForm, FileForm } from './TextForm';


export default class FormContainer extends React.Component{
    render(){
	return(
	    <div className='form-horizontal m-t-20'>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <TextForm holder='ID *'
			    onChange={ this.props.setId }
			    value={this.props.user_id}
			    />
		  <i className='md md-account-circle form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <PasswordForm holder='Password *'
				onChange={ this.props.setPassword }
				value={ this.props.password }
			    />
		  <i className='md md-vpn-key form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <PasswordForm holder='Password ConFirm *'
				onChange={ this.props.confirmPassword }
				value={ this.props.confirm_password }
			    />
		  <i className='md md-vpn-key form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <TextForm holder='Email'
			    onChange={ this.props.setEmail }
			    value={ this.props.email }
			    />
		  <i className='md md-email form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <TextForm holder='Name *'
			    onChange={ this.props.setName }
			    value={ this.props.name }
			    />
		  <i className='md md-spellcheck form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <TextForm holder='Phone *'
			    onChange={this.props.setPhone}
			    value={this.props.phone}
			    />
		  <i className='md md-call form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <FileForm holder='Profile Image'
			    />
		  <i className='md md-contacts form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group text-right m-t-20'>
		<div className='col-xs-12'>
		  <button
		    className='btn btn-primary btn-custom w-md waves-effect waves-light'
		    type='submit'
		    onClick={this.props.onSignUp}>
		    Sign Up
		  </button>
		</div>
	      </div>
	    </div>

	);
    }
}
