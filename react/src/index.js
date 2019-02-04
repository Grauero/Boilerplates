import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import App from './App';

const HMRApp = hot(module)(App);
ReactDOM.render(<HMRApp />, document.getElementById('root'));
