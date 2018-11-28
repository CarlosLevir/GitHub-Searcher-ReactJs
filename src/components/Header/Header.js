import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs>
                        <Tab label="Home" />
                        <Tab label="Credits" />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default Header;