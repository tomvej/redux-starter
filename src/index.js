import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import './index.less';

import store from './store';

render(
    <Provider store={store}>
        <div>It works!</div>
    </Provider>,
    document.getElementById('content')
);
