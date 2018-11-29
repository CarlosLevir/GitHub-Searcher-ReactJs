import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import GitHubUser from '../../services/GitHubUser';

class SearchUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            userName: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    
    render() {
        return (
            <div id="div-searcher">
                <TextField
                    id="home-searcher"
                    label="Search for a GitHub user here XD"
                    style={{}}
                    placeholder="GitHub User"
                    helperText=""
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleChange}
                />
                <Button variant="contained" color="primary">
                <Search />
                    Search
                </Button>
            </div>
        );
    }
}

export default SearchUser;