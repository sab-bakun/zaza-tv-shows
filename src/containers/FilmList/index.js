import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';

import FilmItem from '../../components/FilmItem';
import './FilmList.css';

class FilmList extends Component {  
    render() {
        return (
            <Grid 
                container
                direction='row'
                justify='center'
                alignItems='center'
                spacing={16}
            >
                <Grid item xs={12} sm={10}>
                    <Paper>
                        <List>
                            { 
                                this.props.films.map(film => 
                                    <FilmItem key={film.id} film={film} />
                                )
                            }
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}
        
FilmList.propTypes = {
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

export default connect(mapStateToProps)(FilmList);