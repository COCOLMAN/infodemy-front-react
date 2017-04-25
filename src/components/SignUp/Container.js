import React from 'react';

import Text from './Text';
import FormContainer from './FormContainer';


export default class Container extends React.Component{
    render(){
	return(
	    <div className='wrapper-page'>
	      <Text content={this.props.content}/>
	      <FormContainer setId={ this.props.setId }
			     setPassword={ this.props.setPassword }
			     confirmPassword={this.props.confirmPassword}
			     setPhone={this.props.setPhone}
			     setName={this.props.setName}
			     setEmail={this.props.setEmail}
			     user_id={this.props.user_id}
			     password={this.props.password}
			     confirm_password={this.props.confirm_password}
			     phone={this.props.phone}
			     name={this.props.name}
			     email={this.props.email}
			     onSignUp={this.props.onSignUp}
			     />
	    </div>
	);
    }
}
