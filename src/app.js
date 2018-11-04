import React from 'react'
import RouteManager from './RouteManager';
import './app.scss';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<RouteManager/>
			</div>
		);
	}
}

export default App;
