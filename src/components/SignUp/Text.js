import React from 'react';
import { Link } from 'react-router-dom';


export default class Text extends React.Component{
    render(){
	return(
	    <div className='text-center'>
	      <Link to='/login' className='logo-lg'>
		{this.props.content}
	      </Link>
	    </div>
	);
    }
}
