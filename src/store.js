import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (x) => x,
);

const store = createStore(reducer, middleware);

sagaMiddleware.run(saga);

export default store;
