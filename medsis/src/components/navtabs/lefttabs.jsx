import React, { Component } from 'react';
import Tab from './tabs'
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { Link } from 'react-router'

const mapStateToProps = state =>
    ({
        tabState:state.tabListReducer.tabState,
        loginState:state.loginStateReducer.loginState
    })

const mapDispatchToProps = dispatch =>
    ({
        fetchTabStateApi() {
            dispatch(
                actions.tabServiceAction()
            )
        }
    })

class LeftTab extends Component {
    render() {
        const { loginState } = this.props
        const { tabState } = this.props
        let tabs = (loginState) ? (
            <ul className="nav navbar-nav tabpadding">
                {tabState.map((value, index) =>
                    <Tab key={index} {...value} />
                )}
            </ul>
        ) : (
            null
        )
        return (
            <div>
                {tabs}
            </div>
        );
    }
}

const LeftTabs = connect(mapStateToProps, mapDispatchToProps)(LeftTab);
export default LeftTabs;