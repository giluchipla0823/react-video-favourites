import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import List from './List';
import Detail from './Detail';

const Root = () => (
	<BrowserRouter>
		<React.Fragment>
			<Route exact path="/" component={List}/>
			<Route exact path="/:id" component={Detail}/>
		</ React.Fragment>
	</BrowserRouter>
);

export default Root;