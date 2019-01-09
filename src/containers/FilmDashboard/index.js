import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import FilmCard from '../../components/FilmCard';
import './FilmDashboard.css';

class FilmDashboard extends Component { 
    render() {
        return (
            <Grid container spacing={16}>
                { 
                    this.props.films.map(film => 
                        <Grid key={film.id} item xs={12} sm={6} md={3}>
                            <FilmCard film={film} onClickEdit={ () => this.props.history.push('/edit/' + film.id) } />
                        </Grid>
                    )
                }
            </Grid>
        );
    }
}
        
FilmDashboard.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            year: PropTypes.number,
            country: PropTypes.string,
            description: PropTypes.string,
            banner: PropTypes.string
        })
    )
};

const mapStateToProps = (state) => ({
    films: state.films
});

export default connect(mapStateToProps)(FilmDashboard);