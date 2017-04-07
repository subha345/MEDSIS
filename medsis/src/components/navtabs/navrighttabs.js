import React, { Component } from 'react';
import profileimg from '../../../img/profileimg.png'
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state =>
    ({
        logoutState:state.logoutStateReducer.logoutState
    })

const mapDispatchToProps = dispatch =>
    ({
        fetchLogoutState(state) {
            dispatch(
                actions.logoutStateAction(state)
            )
        }
    })

class NavTab extends Component {
	constructor(props){
		super(props);
		this.state={
			render:this.props.logoutState
		}
	}
	handleClicl(){
		this.props.fetchLogoutState(!this.state.render)
	}
    render() {
        return (
            <div>
                <a href="sidepanel" className="sidepanel-open-button" id="menu-toggle"><i className="fa fa-outdent"></i></a>
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
					<li onClick={this.handleClicl.bind(this)}><a href="logout"><i className="fa falist fa-power-off"></i> Logout</a></li>
				</ul>
			</li>

		</ul>
            </div>
        );
    }
}
const NavRightTab = connect(mapStateToProps, mapDispatchToProps)(NavTab);
export default NavRightTab;