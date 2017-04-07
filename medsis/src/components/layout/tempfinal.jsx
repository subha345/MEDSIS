import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../loginform/login.jsx'
import LoginPage from './templayout.jsx'

const mapStateToProps = state =>
    ({
        logoutState: state.logoutStateReducer.logoutState
    })

class TempRender extends Component {
    render() {
        const { logoutState } = this.props
        console.log({logoutState})
        return (
            <div>
                {(logoutState) ? <Login /> : <LoginPage />}
            </div>
        );
    }
}
const TempFinal = connect(mapStateToProps)(TempRender);
export default TempFinal;