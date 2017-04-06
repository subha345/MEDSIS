import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../loginform/login.jsx'
import TempLayout from './templayout.jsx'

const mapStateToProps = state =>
    ({
        logoutState: state.logoutStateReducer.logoutState
    })

class TempRender extends Component {
    render() {
        const { logoutState } = this.props
        return (
            <div>
                {(logoutState) ? <Login /> : <TempLayout />}
            </div>
        );
    }
}
const TempFinal = connect(mapStateToProps)(TempRender);
export default TempFinal;