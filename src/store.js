import { createStore} from 'redux'

const middleware = window.devToolsExtension ? window.devToolsExtension() : x => x;

export default createStore(state => state, {}, middleware);