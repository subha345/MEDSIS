import React, { Component } from 'react';
import Navbar from '../navbar/navbar.js'
import Content from '../pagecontent/pagecontent'
import SidePanel from '../sidepanel/sidepanel'
import $ from '../../../node_modules/jquery/dist/jquery.min'
import '../../stylessheet/components/sidepanel.css';

class LoginPage extends Component {
    componentDidMount() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
  }
    render() {
        return (
            <div id="wrapper">
                <Navbar />
                <Content />
                <SidePanel />
            </div>
        );
    }
}

export default LoginPage;