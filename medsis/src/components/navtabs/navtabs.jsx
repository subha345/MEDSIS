import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Tab from './tabs'

const mapStateToProps = state =>
    ({
        tabState: state.tabListReducer.tabState
    })

const mapDispatchToProps = dispatch =>
    ({
        fetchTabStateApi() {
            dispatch(
                actions.tabServiceAction()
            )
        }
    })

class NavTab extends Component {

    componentWillMount() {
        this.props.fetchTabStateApi();
    }

    render() {
        const { tabState } = this.props
        return (
            <ul className="nav navbar-nav tabpadding">
                {tabState.map((value, index) =>
                    <Tab key={index} {...value} />
                )}
            </ul>
        );
    }
}
const Nav = connect(mapStateToProps, mapDispatchToProps)(NavTab);
export default Nav;