import React, { Component } from 'react';
import TempFinal from './tempfinal';
import Register from '../register/register';
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';
const mapStateToProps = state =>
    ({
        registerState:state.registerStateReducer.registerState
    })

class Layouting extends Component {
    render() {
        const { registerState } = this.props
         console.log(this.props.registerState)
        return (
            <div>
                {(registerState) ? <Register /> : <TempFinal />}
            </div>
        )
            
        
    }
}
const Layout = connect(mapStateToProps)(Layouting);
export default Layout;