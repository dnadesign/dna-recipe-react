/**
 * Reducers push the data into the state after being directed by the actions
 * When applications get larger reducers usually need
 * to go into their own file, but this is
 * unnecessary until it bloats
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SEND_ERROR
} from './actions';

const posts = (
    state = {
        isFetching: false,
        posts: []
    },
    action
) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                isError: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                posts: action.posts,
                isFetching: false,
                isError: false,
                receivedAt: action.receivedAt
            })
        case SEND_ERROR:
            return Object.assign({}, state, {
                isError: true
            })
        default:
            return state;
    }
}


export default combineReducers({
    routing: routerReducer,
    posts
});
