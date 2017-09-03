/**
 * Actions are what Redux uses to send data to the store. These
 * payloads are sent using dispatchers, and when the store
 * updates send updates across the app and changes state.
 * Example from http://redux.js.org/docs/advanced/ExampleRedditAPI.html
 * When applications get larger actions usually need
 * to go into their own file, but this is
 * unnecessary until it bloats
 */

import request from 'superagent';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SEND_ERROR = 'SEND_ERROR';

export function getPosts() {
  return dispatch => {
    dispatch(requestPosts())

    // TODO: Add check if we already have posts. This can then
    // serve as a local caching mechanism which gets built
    // on each page navigation
    return request
        .get(`https://www.reddit.com/r/${'ethtrader'}.json`)
        .end((err, res) => {
            if(err){
                // Add an error dispatcher here
                dispatch(sendError(err));
            }else{
                dispatch(receivePosts(res.body.data.children));
            }
        })
  }
}

function sendError(err) {
    return {
        type: SEND_ERROR,
        err
    }
}

function requestPosts() {
    return {
        type: REQUEST_POSTS
    }
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json,
    receivedAt: Date.now()
  }
}
