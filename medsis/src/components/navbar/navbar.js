import React, { Component } from 'react';
import '../../stylessheet/components/navbar.css'
import NavLayout from '../layout/navlayout.jsx'
import logo from '../../../img/logos.png'
import profileImg from '../../../img/profileimg.png'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-default navbar-fixed-top topbar" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="applogo">
                            <a><img src={logo} alt="" /></a>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse">
                            <NavLayout />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;