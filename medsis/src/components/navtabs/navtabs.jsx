import React, { Component } from 'react';
import LeftTab from './lefttabs'
import RightTab from './righttabs'

class NavTab extends Component {
    render() {
        return (
            <div>
                <LeftTab />
                <RightTab />
            </div>
        );
    }
}

export default NavTab;