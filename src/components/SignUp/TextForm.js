import React from 'react';


export default class TextForm extends React.Component{
    render (){
	return(
	    <input
	      className='form-control'
	      type='text'
	      placeholder={this.props.holder}
	      value={this.props.value}
	      onChange={(e) => {
		  this.props.onChange(e.target.value);
	      }}
	      />
	);
    }
}


export class PasswordForm extends React.Component{
    render (){
	return(
	    <input
	      className='form-control'
	      type='password'
	      placeholder={this.props.holder}
	      value={this.props.value}
	      onChange={(e) => {
		  this.props.onChange(e.target.value);
	      }}
	      />
	);
    }
}


export class FileForm extends React.Component{
    render (){
	return(
	    <input
	      className='form-control'
	      type='file'
	      placeholder={this.props.holder}
	      value={this.props.value}
	      accept="image/*"
	      onChange={(e) => {
		  this.props.onChange(e.target.files[0]);
	      }}
	      />
	);
    }
}


