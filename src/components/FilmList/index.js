import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Film from './../Film';
import './FilmList.css';

const FilmList = ({ films, onClickEdit }) =>
    <Grid container spacing={16}>
        { 
            films.map(film => 
                <Grid key={film.id} item xs={6} md={3}>
                    <Film film={film} onClickEdit={onClickEdit} />
                </Grid>
            )
        }
    </Grid>;
        
FilmList.propTypes = {
    films: PropTypes.array,
    onClickEdit: PropTypes.func
};

export default FilmList;