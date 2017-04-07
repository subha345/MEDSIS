import React from 'react';
import ReactDOM from 'react-dom';
import '../js/bootstrap-toggle/bootstrap-toggle.min'
import '../js/bootstrap-select/bootstrap-select'
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'whatwg-fetch';
import configureStore from './stores/configurestore';
import { Provider } from 'react-redux';
import '../css/font-awesome.min.css'
import '../css/root.css'
import Register from './components/register/register.jsx'
const store=configureStore();

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
