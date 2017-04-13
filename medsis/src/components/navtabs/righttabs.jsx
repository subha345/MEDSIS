import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { Link } from 'react-router'
import profileimg from '../../../img/profileimg.png'

const mapStateToProps = state =>
    ({
        loginState:state.loginStateReducer.loginState,
        responseJson:state.loginResponseReducer.responseJson
    })

const mapDispatchToProps = dispatch =>
    ({
        fetchTabStateApi() {
            dispatch(
                actions.tabServiceAction()
            )
        },
        fetchLoginState(state) {
            dispatch(
                actions.loginStateAction(state)
            )
        }
    })

class RightTab extends Component {
    changeLoginState() {
		this.props.fetchLoginState(false)
        console.log(this.props.loginState)
	}
    
    componentWillMount() {
        this.props.fetchTabStateApi()
    }
    
    render() {
        const { responseJson,loginState } = this.props
        console.log(responseJson)
        let tabs = (responseJson==="$200" && loginState) ? (
            <div>
                <a className="sidepanel-open-button" id="menu-toggle"><i className="fa fa-outdent"></i></a>
                <ul className="top-right">
                    <li className="link">
				        <a href="#" className="notifications">6</a>
			        </li>

			        <li className="dropdown link">
				        <a href="#" data-toggle="dropdown" className="dropdown-toggle profilebox"><img src={profileimg} alt="img" /><b>Abhijith Shetty</b><span className="caret"></span></a>
				<ul className="dropdown-menu dropdown-menu-list dropdown-menu-right">
					<li role="presentation" className="dropdown-header">Profile</li>
					<li><a href="mailbox"><i className="fa falist fa-inbox"></i>Inbox<span className="badge label-danger">4</span></a></li>
					<li><a href="docprofile"><i className="fa falist fa-wrench"></i>Settings</a></li>
					<li className="divider"></li>
					<li onClick={this.changeLoginState.bind(this)}><Link to='/login'><i className="fa falist fa-power-off"></i> Logout</Link></li>
				</ul>
			</li>

		</ul>
            </div>
        ): (
            <ul className="nav navbar-nav navbar-right tabpadding">
                <li><Link to='/register'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        )
        return (
            <div>
                {tabs}
            </div>
        );
    }
}

const RightTabs = connect(mapStateToProps, mapDispatchToProps)(RightTab);
export default RightTabs;