import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

export default class Main extends Component {
	render () {
		return(
			<div>
				<main>
					<Switch>
						<Route exact path='/' component={Home} />
					</Switch>
				</main>
			</div>
			)
	}
}
