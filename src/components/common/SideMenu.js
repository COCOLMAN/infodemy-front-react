import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'react-bootstrap';


export default class SideMenu extends React.Component{
    constructor(props){
	super(props);
    };

    render(){
	return(
	    <div className="left side-menu">
	      <div className="slimScrollDiv">
		<div className="sidebar-inner slimscrollleft">
		  <div className="sidebar-menu">
		      <br/>
		      <ul>
			<Link to='admin/academy'>
			  <h3 className="text-muted">
			    학원 찾기
			  </h3>
			</Link>
			<br/>
			<a href='/login'>
			  <h3 className="text-muted">
			    학원 관리
			  </h3>
			</a>
			<br/>
			<a href='/login'>
			  <h3 className="text-muted">
			    테스트
			  </h3>
			</a>			
		      </ul>
		  </div>	      
		</div>
	      </div>
	    </div>

	);
    }
}
