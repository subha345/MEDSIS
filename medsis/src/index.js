import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap'
import 'whatwg-fetch';
import configureStore from './stores/configurestore';
import { Provider } from 'react-redux';
import '../css/font-awesome.min.css'
import './stylessheet/components/sidepanel.css'
import '../css/root.css'
import Register from './components/register/register.jsx'
// import '../js/modernizr.custom'
const store=configureStore();

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
