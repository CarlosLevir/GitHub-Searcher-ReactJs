import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './creditsPage.css';

class CreditsPage extends Component {

    render() {
        return (
            <div className="credits-div-card">
                <Card className="credits-card">
                        <CardContent>
                            <Typography
                                component="p"
                                size="large">
                                Made with <b className="heart">❤</b> by 
                                <Button href="https://github.com/CarlosLevir" target="__blank" size="small" color="primary">
                                Carlos Levir
                                </Button>
                            </Typography>
                        </CardContent>
                    </Card>
            </div>
        );
    }
}

export default CreditsPage;