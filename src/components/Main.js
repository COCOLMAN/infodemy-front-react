import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/';
import TopMenu from './common/TopMenu';
import SideMenu from './common/SideMenu';

import Academy from './Academy/Academy';


class Main extends React.Component{
    constructor(props){
	super(props);
	console.log("------------");
	console.log(this.props.logined);
	console.log("------------");
    }
    
    render(){
	return(
		<div>
		<div className="enlarged">
		{ this.props.logined ? '' : <Redirect to='/login'/> } 
		<TopMenu/>
		<SideMenu/>
		</div>)

	    </div>

	);
    }
}

const mapStateToProps = (state) => {
    return{
	logined: state.user.logined
    };
};


const mapDispatchToProps = (dispatch) => {
    return{
	logIned: () => { dispatch(actions.logIned());}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
