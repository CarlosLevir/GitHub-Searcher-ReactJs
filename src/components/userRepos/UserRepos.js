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
                            <Typography component="p" color="textSecondary">
                                Stars: {repo.stargazers_count}
                            </Typography>
                            <Typography
                                component="p"
                                size="small">
                                Issues: {repo.open_issues}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href={repo.html_url}
                                target="__blank"
                                size="small"
                                color="primary">
                                View Details
                            </Button>
                        </CardActions>
                    </Card>
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