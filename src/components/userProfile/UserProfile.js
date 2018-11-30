import React, { Component } from 'react';
import UserRepos from '../userRepos/UserRepos'
import Card from '@material-ui/core/Card';
import propTypes from 'prop-types'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './userProfile.css'

class UserProfile extends Component {
    render() {
        var userProfile = this.props.user ?
        (
            <div className="profile-info">
                <div className="div-profile-card">
                    <Card className="profile-card">
                        <CardActionArea>
                            <CardMedia
                                className="card-media"
                                image={this.props.user.avatar_url}
                                title="User Profile Picture"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.user.login}
                            </Typography>
                            <Typography component="p">
                                {this.props.user.bio}
                            </Typography>
                            <br />
                            <Typography component="p">
                                Following: {this.props.user.following}
                            </Typography>
                            <Typography component="p">
                                Followers: {this.props.user.followers}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                View Details
                            </Button>
                        </CardActions>
                        </Card>
                </div>
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