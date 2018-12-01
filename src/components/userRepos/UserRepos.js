import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './userRepos.css'

class UserRepos extends Component {
    render() {
        var repos = this.props.repos.map((repo, key) => {
            return (
                    <Card className="card-items" key={key}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {repo.name}
                            </Typography>
                            <Typography component="p" color="textSecondary">
                                {repo.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View Details</Button>
                        </CardActions>
                        <CardActions>
                            <Button size="small">Issues: {repo.open_issues}</Button>
                        </CardActions>
                    </Card>
                // <div key={key} >
                //     <div>
                //         <h3>{repo.name}
                //             <span >{repo.stargazers_count} STARS</span>
                //         </h3>
                //         <p>{repo.description}</p>
                //         <p>
                //             <a href={repo.html_url}>Repository</a>
                //             <a href={repo.html_url + '/issues'}>Issues ({repo.open_issues}) </a>
                //         </p>
                //     </div>
                // </div>
            );
        })

        return (
            <div className="div-cards-repos">
                {repos}
            </div>
        );
    }
}

export default UserRepos;