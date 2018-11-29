import React, { Component } from 'react';
import UserRepos from '../userRepos/UserRepos'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import propTypes from 'prop-types'
import './userProfile.css'

class UserProfile extends Component {
    render() {
        var userProfile = this.props.user ?
        (
            <div>
                <Card>
                    <CardContent>
                        <div>
                            <img className="avatar-profile" src={this.props.user.avatar_url} alt="Profile Image"/>
                            <h2>{this.props.user.login}</h2>
                            <p>{this.props.user.name}</p>
                            <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
                            <p><a href={this.props.user.html_url}>View details</a></p>
                        </div>
                    </CardContent>
                </Card>
                <div>
                    <UserRepos
                        repos={this.props.repos}
                    />
                </div>
            </div>
        ) : null;

        return userProfile;
    }
}

UserProfile.propTypes = {
    user: propTypes.object,
    repos: propTypes.array
}

export default UserProfile;