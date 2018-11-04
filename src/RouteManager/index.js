import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';

function RouteManager() {
	const About = () => <h2>About</h2>;
	return (
		<Router>
			<>
				<Route exact path="/" component={ Dashboard } />
				<Route path="/about" component={ About } />
			</>
		</Router>
	);
}
export default RouteManager;
