import React, { Component } from 'react';
import Login from './loginform/login.jsx'
import TempLayout from './layout/templayout.jsx'
import {connect} from 'react-redux';

const mapStateToProps = state =>
    ({
        logoutState:state.logoutStateReducer.logoutState
    })

class App extends Component {
  render() {
    const { logoutState } = this.props
    return (
      <div>
        {(logoutState) ? <Login /> : <TempLayout />}
      </div>
    );
  }
}
const Application = connect(mapStateToProps)(App);
export default Application;
