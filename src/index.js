import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.less'

render(
    <Provider store={createStore(state => state, {})}>
        <div>It works!</div>
    </Provider>,
    document.getElementById('content')
);