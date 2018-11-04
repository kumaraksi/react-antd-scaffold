import React from 'react'
import ReactDOM from 'react-dom'
import RedBox from 'redbox-react'

import App from './app'

// Save a reference to the root element for reuse
const rootEl = document.getElementById('root');

// Create a reusable render method that we can call more than once
let render = () => {
	// Dynamically import our main App component, and render it
	ReactDOM.render(
		<App />,
		rootEl,
	);
};

if (module.hot) {
	// Support hot reloading of components
	// and display an overlay for runtime errors
	const renderApp = render;
	const renderError = (error) => {
		ReactDOM.render(
			<RedBox error={ error } />,
			rootEl,
		);
	};
	// In development, we wrap the rendering function to catch errors,
	// and if something breaks, log the error and render it to the screen
	render = () => {
		try {
			renderApp();
		} catch (error) {
			console.error(error);
			renderError(error);
		}
	};
	// Whenever the App component file or one of its dependencies
	// is changed, re-import the updated component and re-render it
	module.hot.accept('./App', () => {
		setTimeout(render);
	});
}

render();
