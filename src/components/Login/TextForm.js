import React from 'react';


export default class TextForm extends React.Component{


    render (){
	return(
	    <input
	      className='form-control'
	      type='text'
	      placeholder={this.props.holder}
	      value={this.state.value}
	      />
	);
    }
}
