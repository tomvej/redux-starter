import * as R from 'ramda';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxFreeze from 'redux-freeze';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle

const middlewareList = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewareList.push(reduxFreeze);
}

const middleware = compose(
    applyMiddleware(...middlewareList),
    reduxDevTools ? reduxDevTools() : R.identity,
);

const store = createStore(reducer, middleware);

sagaMiddleware.run(saga);

export default store;
