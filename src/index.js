/**
 * The index.js is the base file, and as such is where we'll import
 * all of the base sass. The sass is a direct copy of the folder
 * from the DNA recipe.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import registerServiceWorker from './registerServiceWorker';

import App from './components/_app/App';

// Import all global styles
import './globals/sass/style.scss';

ReactDOM.render(
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
