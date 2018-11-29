import React, { Component } from 'react';

class UserProfile extends Component {
    render() {
        var userProfile = this.props.user ?
        (
            <div className="row">
                <div className="col-lg-4">
                <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140" />
                <h2>{this.props.user.login}</h2>
                <p>{this.props.user.name}</p>
                <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
                <p><a className="btn btn-default" href={this.props.user.html_url} role="button">View details</a></p>
                </div>
                <div className="col-lg-8">
                {/* <UserRepos repos={this.props.repos} /> */}
                </div>
            </div>
        ) : null;

        return userProfile;
    }
}

export default UserProfile;