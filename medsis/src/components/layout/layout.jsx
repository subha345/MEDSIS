import React, { Component } from 'react';
import NavTab from '../navtabs/navtabs';
import NavRightTab from '../navtabs/navrighttabs.js'

class Layout extends Component {
    render() {
        return (
            <div>
                <NavRightTab />
                <NavTab />
            </div>
        );
    }
}

export default Layout;