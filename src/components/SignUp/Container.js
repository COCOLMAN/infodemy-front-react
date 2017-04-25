import React from 'react';

import Text from './Text';
import FormContainer from './FormContainer';


export default class Container extends React.Component{
    render(){
	return(
	    <div className='wrapper-page'>
	      <Text content={this.props.content}/>
	      <FormContainer inputId={ this.props.inputId }
			     inputPassword={ this.props.inputPassword }
			     user_id={this.props.user_id}
			     password={this.props.password}
			     onLogin={this.props.onLogin}
			     />
	    </div>
	);
    }
}
