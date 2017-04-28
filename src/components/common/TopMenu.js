import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions/';


class TopMenu extends React.Component{
    constructor(props){
	super(props);
    }

    componentWillMount(){

    }

    render(){
	return(
	    <div className="topbar">
	      <div className="topbar-left">
		<div className="text-center">
		  <div className='logo'>
		    <i className='md md-link'/>  
		    <span> Linkademy</span>
		  </div>
		</div>
	      </div>
	      <div className="navbar navbar-default" role="navigation">
		<div className="container">

		  <ul className="nav navbar-nav navbar-right pull-right">
		    <img width="50" height="50" src={localStorage.getItem('user_photo')}/>
		    <li className="dropdown hiddent-xs">
		      <DropdownButton className="right-bar-toggle waves-effect waves-light"
				      bsStyle='primary'
				      title={localStorage.getItem('user_name') + '님'}
				      >
			<MenuItem eventKey="1" onClick={()=>{
			      console.log("회원정보수정");
			      }}>회원정보 수정</MenuItem>
			<MenuItem eventKey="2" onClick={()=>{
			      console.log("로그아웃");
			      axios.get('/user/logout/')
				.then((response)=>{
				    console.log(response.data);
				    localStorage.clear();
				    this.props.logIned();
				})
				.catch((error)=>{
				    console.log(error.response);
				});
			  }}>로그아웃</MenuItem>
		      </DropdownButton>
		    </li>
		  </ul>
		</div>
	      </div>
	    </div>
	);
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
	logIned: () => { dispatch(actions.logIned()); }
    };
}


export default connect(mapDispatchToProps)(TopMenu);
