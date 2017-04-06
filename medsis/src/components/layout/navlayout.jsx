import React, { Component } from 'react';
import NavTab from '../navtabs/navtabs';
import NavRightTab from '../navtabs/navrighttabs.js'

class NavLayout extends Component {
    render() {
        return (
            <div>
                <NavRightTab />
                <NavTab />
            </div>
        );
    }
}

export default NavLayout;