import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardContent, Typography} from '@material-ui/core';

import './Film.css';

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: `Breakfast at Tiffany's`,
            year: '1961',
            country: 'USA',
            description: `Holly Golightly is a superficial, ambitious, 
                money-orientated New York socialite. Paul Varjak, a writer, 
                moves into her building and they become friends. Ultimately 
                Paul falls in love with Holly but will she reciprocate or follow her ambitions?`,
            banner: 'images/banner.jpg'
        };
    }

    render() {
        return (
            <Card className='Film'>
                <CardHeader
                    title={this.state.name}
                    subheader={this.state.year + ' - ' + this.state.country}
                />
                <CardMedia
                    className='Film-banner'
                    image='images/banner.jpg'
                    title={this.state.name}
                />
                <CardContent>
                    <Typography>
                        {this.state.description}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default Film;