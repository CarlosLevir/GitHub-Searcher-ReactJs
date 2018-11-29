import React, { Component } from 'react';
import Header from '../header/Header';
import SearchUser from '../searchUser/SearchUser';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="div-searcher">
                    <SearchUser />
                </div>
            </div>
        );
    }
}

export default Home;