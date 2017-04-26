import React from 'react';


export default class Academy extends React.Component{
    render(){
	return(
	    <div>
	      { localStorage.getItem('token') }
	    </div>
	);
    }
}
