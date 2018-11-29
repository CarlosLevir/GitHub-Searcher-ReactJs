import React, { Component } from 'react';
import Header from '../header/Header';
import SearchUser from '../searchUser/SearchUser';
import UserProfile from '../userProfile/UserProfile'
import './home.css';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: null,
            repos: []
        }
    }

    updateUser = user => {
        this.setState({
            user: user
        })
    }
    updateRepos = repos => {
        this.setState({
            repos: repos
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div id="div-searcher">
                    <SearchUser 
                        updateUser={this.updateUser}
                        updateRepos={this.updateRepos}
                    />
                    <UserProfile
                        user={this.state.user}
                        repos={this.state.repos}
                    />
                </div>
            </div>
        );
    }
}

export default Home;