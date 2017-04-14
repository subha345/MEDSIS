import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import '../node_modules/bootstrap-validator/dist/validator.min'
import '../js/bootstrap-toggle/bootstrap-toggle.min'
import '../js/bootstrap-select/bootstrap-select'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/font-awesome.min.css'
import '../css/root.css'
import { Router , browserHistory} from 'react-router'
import Routes from'./routes'
import configureStore from './stores/configurestore';
import { Provider } from 'react-redux';
import './stylesheet/components/navbar.css'


const store=configureStore();

ReactDOM.render(
  <Provider store={store}>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>,
  document.getElementById('root')
);
