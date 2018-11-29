import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import * as GitHubUser from '../../services/GitHubUser';
import propTypes from 'prop-types';

class SearchUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            userName: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            userName: e.target.elements.userName.value
        }, () => {
            if(this.state.userName){
                GitHubUser.getUserByUserName(this.state.userName).then((response) => {
                    this.props.updateUser(response.data);
                })
                GitHubUser.getRepoByUserName(this.state.userName).then((response) => {
                    this.props.updateRepos(response.data);
                })
            }
        })

    }

    render() {
        return (
            <div className="div-searcher">
                <form method="POST" onSubmit={this.handleSubmit}>
                    <TextField
                        id="home-searcher"
                        name="userName"
                        label="Search for a GitHub user here XD"
                        placeholder="GitHub User"
                        helperText=""
                        margin="normal"
                        variant="outlined"
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <div className="search-button-div">
                        <Button variant="contained" color="primary" type="submit">
                            <Search />
                            Search
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

SearchUser.propTypes = {
    updateUser: propTypes.func.isRequired,
    updateRepos: propTypes.func.isRequired
}

export default SearchUser;