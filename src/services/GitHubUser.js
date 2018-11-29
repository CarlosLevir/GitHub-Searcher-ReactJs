import Axios from 'axios';

const getUserByUserName = (username) => {
    return Axios.get('https://api.github.com/users/' + username);
}

const getRepoByUserName = (username) => {
    return Axios.get('https://api.github.com/users/' + username + '/repos');
}

export { getUserByUserName, getRepoByUserName };