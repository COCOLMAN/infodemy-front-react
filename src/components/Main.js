import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopMenu from './common/TopMenu';
import SideMenu from './common/SideMenu';

import Academy from './Academy/Academy';


export default class Main extends React.Component{
    render(){
	return(
	    <Router>
	      <div>
		<TopMenu/>
		<SideMenu/>
		<Route path='academy' component={Academy}/>
	      </div>
	    </Router>
	);
    }
}
