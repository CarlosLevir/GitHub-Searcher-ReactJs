import React, { Component } from 'react';

class UserRepos extends Component {
    render() {
        var repos = this.props.repos.map((repo, key) => {
            return (
                <div key={key} >
                    <div>
                        <h3>{repo.name}
                            <span >{repo.stargazers_count} STARS</span>
                        </h3>
                        <p>{repo.description}</p>
                        <p>
                            <a href={repo.html_url}>Repository</a>
                            <a href={repo.html_url + '/issues'}>Issues ({repo.open_issues}) </a>
                        </p>
                    </div>
                </div>
            );
        })

        return (
            <div>
                {repos}
            </div>
        );
    }
}

export default UserRepos;