import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardContent, Typography, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import './Film.css';

const Film = ({ film, onClickEdit }) => 
    <Card className='Film'>
        <CardHeader
            title={film.name}
            subheader={film.year + ' - ' + film.country}
            action={
                <IconButton onClick={onClickEdit(film.id)}>
                    <EditIcon />
                </IconButton>
            }
        />
        <CardMedia
            className='Film-banner'
            image={film.banner}
            title={film.name}
        />
        <CardContent>
            <Typography className='Film-description'>
                {film.description}
            </Typography>
        </CardContent>
    </Card>;

Film.propTypes = { 
    film: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        year: PropTypes.number,
        country: PropTypes.string,
        description: PropTypes.string,
        banner: PropTypes.string
    }),
    onClickEdit: PropTypes.func
};

export default Film;