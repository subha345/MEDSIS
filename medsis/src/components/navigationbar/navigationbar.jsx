import React, { Component } from 'react';
import logo from '../../../img/logos.png';
import { Link }  from 'react-router'
import NavTab from '../navtabs/navtabs'

class Nav extends Component {
    render() {
        return (
            <div>
                <div>
                <div className="navbar navbar-fixed-top topbar" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="applogo">
                            <Link to='/login'><img src={logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse">
                            <NavTab />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Nav;