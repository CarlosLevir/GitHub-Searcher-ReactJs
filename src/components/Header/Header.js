import React, { Component } from 'react';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import HomePage from '../homePage/HomePage';
import Home from '@material-ui/icons/Home';
import Copyright from '@material-ui/icons/Copyright'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

class Header extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            value: 1,
        }
    }

    handleChange = (e, value) => {
        this.setState({
            value
        })
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab icon={<Home />}      value={1} />
                    <Tab icon={<Copyright />} value={2} />
                </Tabs>
                </AppBar>
                {this.state.value === 1 && <HomePage />}
                {this.state.value === 2 && <TabContainer>Credits</TabContainer>}
            </div>
        );
    }
}

export default Header;