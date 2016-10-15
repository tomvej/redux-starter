import {createStore} from 'redux';
import reducer from './reducer';

const middleware = window.devToolsExtension ? window.devToolsExtension() : (x) => x;

export default createStore(reducer, middleware);
