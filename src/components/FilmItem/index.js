import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import './FilmItem.css';

const FilmItem = ({ film, onClickEdit }) => 
    <ListItem alignItems='flex-start'>
        <ListItemAvatar>
            <Avatar alt={film.name} src={film.banner} />
        </ListItemAvatar>
        <ListItemText
            primary={film.name}
            secondary={
                <React.Fragment>
                    <Typography component='span' color='textPrimary'>
                        {film.year + ' - ' + film.country}
                    </Typography>
                    {film.description}
                </React.Fragment>
            }
        />
        <ListItemSecondaryAction>
            <IconButton onClick={onClickEdit}>
                <EditIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>;

FilmItem.propTypes = { 
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

export default FilmItem;