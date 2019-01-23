import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';

let _compose = compose;

if (process.env.NODE_ENV !== 'production') {
  _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

let persistedState = {};

const enhancer = _compose(
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware({
      promiseTypeSuffixes: ['FETCHING', 'SUCCESS', 'ERROR']
    })
  )
);

export const store = createStore(reducers, persistedState, enhancer);
