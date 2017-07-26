import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'

import 'semantic-ui-css/semantic.min.css';

const store = createStore(reducer);

ReactDOM.render(<App store={ store } />, document.getElementById('root'));
registerServiceWorker();
