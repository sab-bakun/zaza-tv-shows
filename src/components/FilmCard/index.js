import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardContent, Typography, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

import './FilmCard.css';

const FilmCard = ({ film }) => 
    <Card className='FilmCard'>
        <CardHeader
            title={film.name}
            subheader={film.year + ' - ' + film.country}
            action={
                <Link to={'/edit/' + film.id}>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </Link>
            }
        />
        <CardMedia
            className='FilmCard-banner'
            image={film.banner}
            title={film.name}
        />
        <CardContent>
            <Typography className='FilmCard-description'>
                {film.description}
            </Typography>
        </CardContent>
    </Card>;

FilmCard.propTypes = { 
    film: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        year: PropTypes.number,
        country: PropTypes.string,
        description: PropTypes.string,
        banner: PropTypes.string
    })
};

export default FilmCard;