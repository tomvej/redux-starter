import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import store from './store';
import Root from './Root';

render(
    <AppContainer>
        <Root store={store} />
    </AppContainer>,
    document.getElementById('content')
);

if (module.hot) {
    module.hot.accept('./Root', () => {
        const ReloadedRoot = require('./Root').default; // eslint-disable-line global-require, #scaffolding
        render(
            <AppContainer>
                <ReloadedRoot store={store} />
            </AppContainer>,
            document.getElementById('content')
        );
    });
}
