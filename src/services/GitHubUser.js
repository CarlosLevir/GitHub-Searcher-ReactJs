import { Component } from 'react';
import Axios from 'axios';

class GitHubUser extends Component {
    getUserByUserName = (username) => {
        return Axios.get('https://api.github.com/users' + username);
    }
    getRepoByUserName = (username) => {
        return Axios.get('https://api.github.com/users' + username + '/repos');
    }
}

export default GitHubUser;