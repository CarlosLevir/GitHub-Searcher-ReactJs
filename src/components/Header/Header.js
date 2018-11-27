import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar title="GitHub Searcher">
                    <Tabs>
                        <Tab label="Home" />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default Header;