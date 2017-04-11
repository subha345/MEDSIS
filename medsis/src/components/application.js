import React, { Component } from 'react';
import Nav from './navigationbar/navigationbar.jsx'
import SidePanel from './sidepanel/sidepanel.jsx'


class Application extends Component {
  render() {
    return (
     <div>
        <Nav />
        {this.props.children}
    </div>
    );
  }
}

export default Application;
