import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createConnection from 'tweetping-connect';
import App from './App';
import './index.css';

const WALL_SIZE = 10;

const RESET = 'RESET';
const NEW_POST_RECEIVED = 'NEW_POST_RECEIVED';

const store = createStore((state, action) => {
  const {type, payload} = action;
  switch (type) {
    case RESET:
      return payload;
    case NEW_POST_RECEIVED:
      return [payload, ...state.slice(0, WALL_SIZE - 2)];
    default:
      return state;
  }
}, []);

const {connect, load, permalink} = createConnection('f2e596ea');

connect('wall', (post) => {
  store.dispatch({
    type: NEW_POST_RECEIVED,
    payload: post
  });
});

load('wall/', {
  query: {
    size: WALL_SIZE
  }
}).then((posts) => {
  store.dispatch({
    type: RESET,
    payload: posts
  });
});

connect('geo', (post) => console.log('geo post', post));

ReactDOM.render(
  <Provider store={store}>
    <App permalink={permalink} />
  </Provider>,
  document.getElementById('root')
);
