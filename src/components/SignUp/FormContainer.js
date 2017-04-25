import React from 'react';
import { Link } from 'react-router-dom';

import TextForm, { PasswordForm, FileForm } from './TextForm';


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
				onLogin={ this.props.onLogin }
			    />
		  <i className='md md-vpn-key form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <PasswordForm holder='Password ConFirm'
				onChange={ this.props.inputPassword }
				value={ this.props.password }
				onLogin={ this.props.onLogin }
			    />
		  <i className='md md-vpn-key form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <TextForm holder='Email'
			    />
		  <i className='md md-email form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <TextForm holder='Name'
			    />
		  <i className='md md-spellcheck form-control-feedback l-h-34'/>
		</div>
	      </div>
	      <div className='form-group'>
		<div className='col-xs-12'>
		  <TextForm holder='Phone'
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
		    onClick={this.props.onLogin}>
		    Sign Up
		  </button>
		</div>
	      </div>
	    </div>

	);
    }
}
