import React from 'react';


class TopMenu extends React.Component{
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
