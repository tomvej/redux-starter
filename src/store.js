import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle

const middleware = compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools ? reduxDevTools() : (x) => x,
);

const store = createStore(reducer, middleware);

sagaMiddleware.run(saga);

export default store;
