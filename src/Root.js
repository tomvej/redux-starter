import React from 'react';
import {Provider} from 'react-redux';

import './index.less';

import store from './store';

const Root = () => (
    <Provider store={store}>
        <div>
            It works!
        </div>
    </Provider>
);

export default Root;
