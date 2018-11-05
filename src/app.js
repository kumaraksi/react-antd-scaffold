import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import RouteManager from './RouteManager';
import Reducers from './store/reducers'

import './app.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore)

class App extends React.Component {
	render() {
		return (
			<Provider store={ createStoreWithMiddleware(Reducers) } >
				<div className='App'>
					<RouteManager/>
				</div>
			</Provider>
		);
	}
}

export default App;
