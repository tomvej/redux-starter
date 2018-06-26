import React from 'react';
import {render} from 'react-dom';
import {hot} from 'react-hot-loader';

import Root from './Root';

const App = hot(module)(Root);

render(
    <App />,
    document.getElementById('content'),
);
