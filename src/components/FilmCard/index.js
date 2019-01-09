import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardContent, Typography, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import './FilmCard.css';

const FilmCard = ({ film, onClickEdit }) => 
    <Card className='FilmCard'>
        <CardHeader
            title={film.name}
            subheader={film.year + ' - ' + film.country}
            action={
                <IconButton onClick={onClickEdit}>
                    <EditIcon />
                </IconButton>
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
    }),
    onClickEdit: PropTypes.func.isRequired
};

export default FilmCard;