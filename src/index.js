import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Root from './Root';
import * as serviceWorker from './serviceWorker';

// import 'semantic-ui-css';
// import 'semantic-ui-react';
import './animation/Animation.css';
import './animation/Warning.css';
// import App from './App';

import Promise from 'promise-polyfill';

// axios IE8 지원
if (!window.Promise) {
    window.Promise = Promise;
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
