import React from 'react';

import Text from './Text';
import FormContainer from './FormContainer';


export default class Container extends React.Component{
    render(){
	return(
	    <div className='wrapper-page'>
	      <Text content={this.props.content}/>
	      <FormContainer/>
	    </div>
	);
    }
}
