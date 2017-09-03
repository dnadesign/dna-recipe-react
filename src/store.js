// http://redux.js.org/
import { createStore, applyMiddleware, compose } from 'redux';

// https://github.com/reactjs/react-router-redux
import { routerMiddleware } from 'react-router-redux';

// In redux, thunks return a function instead of an action
// this is useful when you have an async event (like an
// API call)
// https://github.com/gaearon/redux-thunk
import thunk from 'redux-thunk';

// To manipulate browser history
// https://www.npmjs.com/package/history
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';

export const history = createHistory();

let initialState = {};
let enhancers = [];
const middleware = [
	thunk,
	routerMiddleware(history)
];

if(process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.devToolsExtension;

	if(typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

const store = createStore(
	rootReducer,
	initialState,
	composedEnhancers
);

export default store;
