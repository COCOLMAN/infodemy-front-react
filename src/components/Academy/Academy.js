import React from 'react';


export default class Academy extends React.Component{
    constructor(props){
	super(props);
    }
    
    render(){
	return(
	    <div className="content-page">
	      <div className="content">
		<div className="container">	      
		  <div className="row">
		    Test
		  </div>
		  <div className="row">
		    { localStorage.getItem('token') }
		  </div>
		</div>
	      </div>    
	    </div>
	);
    }
}
