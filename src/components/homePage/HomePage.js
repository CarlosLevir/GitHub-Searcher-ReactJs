import React, { Component } from 'react';
import SearchUser from '../searchUser/SearchUser';
import UserProfile from '../userProfile/UserProfile';
import './homePage.css';

class HomePage extends Component {
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
                <SearchUser 
                    updateUser={this.updateUser}
                    updateRepos={this.updateRepos}
                />
                <UserProfile
                    user={this.state.user}
                    repos={this.state.repos}
                />
            </div>
        );
    }
}

export default HomePage;