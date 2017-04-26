import React from 'react';
import axios from 'axios';

class TopMenu extends React.Component{
    componentWillMount(){
	axios.defaults.baseURL = 'http://infodemy-dev-env.ap-northeast-2.elasticbeanstalk.com';
	axios.defaults.headers.common['Authorization'] = 'Token ' +localStorage.getItem('token');
	axios.get('/user/myinfo/')
	    .then((response)=>{
		console.log(response.data);
	    })
	    .catch((error)=>{
		console.log(error.response);
	    });
    }

    render(){
	return(
	    <div className="topbar">
	      <div className="topbar-left">
		<div className="text-center">
		  <div className='logo'>
		    <span>Linkademy</span>
		  </div>
		</div>
	      </div>
	      <div className="navbar navbar-default" role="navigation">
	      </div>
	    </div>
	);
    }
}


export default TopMenu;
