import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardContent, CardActions, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { saveFilm } from '../../actions';
import { editFilmField } from '../../actions';
import { initializeEditFilmForm } from '../../actions';
import { clearEditFilmForm } from '../../actions';

import './FilmEdit.css';

class FilmEdit extends Component {

    onChangeField = field => event => this.props.onChangeField(field, event.target.value);

    componentDidMount() {
        this.props.initializeForm(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearForm();
    }

    render() {
        const { banner } = this.props.films.find(film => film.id === this.props.match.params.id);

       
        return (
            <Card className='FilmEdit'>
                <CardHeader
                    title={ 
                        <TextField
                            className='FilmEdit-name'
                            label='Name'
                            value={this.props.editFieldName}
                            onChange={this.onChangeField('editFieldName')}
                        />
                    }
                    subheader={
                        <div className='FilmEdit-textContainer'>
                            <TextField
                                className='FilmEdit-text'
                                label='Year'
                                type='number'
                                value={this.props.editFieldYear}
                                onChange={this.onChangeField('editFieldYear')}
                            />
                            <TextField
                                className='FilmEdit-text'
                                label='Country'
                                value={this.props.editFieldCountry}
                                onChange={this.onChangeField('editFieldCountry')}
                            />
                        </div>
                    }
                />
                <CardMedia
                    className='FilmEdit-banner'
                    image={'../' + banner}
                    title={this.props.editFieldName}
                />
                <CardContent>
                    <TextField
                        className='FilmEdit-description'
                        label='Description'
                        multiline
                        rowsMax='6'
                        value={this.props.editFieldDescription}
                        onChange={this.onChangeField('editFieldDescription')}
                    />
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary' onClick={ 
                        () => {
                            this.props.onClickSave(this.props.match.params.id);
                            this.props.history.push('/dashboard');
                        }
                    }>
                        Save
                    </Button>
                    <Button size='small' color='secondary' onClick={ () => this.props.history.goBack() }>
                        Cancel
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

FilmEdit.propTypes = { 
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            year: PropTypes.number,
            country: PropTypes.string,
            description: PropTypes.string,
            banner: PropTypes.string
        })
    ),
    editFieldName: PropTypes.string,
    editFieldYear: PropTypes.number,
    editFieldCountry: PropTypes.string,
    editFieldDescription: PropTypes.string,
    onClickSave: PropTypes.func.isRequired,
    onChangeField: PropTypes.func.isRequired,
    initializeForm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    films: state.films,
    editFieldName: state.editFieldName,
    editFieldYear: state.editFieldYear,
    editFieldCountry: state.editFieldCountry,
    editFieldDescription: state.editFieldDescription,
    clearForm: state.clearEditFilmForm
});

const mapDispatchToProps = (dispatch) => ({
    onClickSave: (id) => dispatch(saveFilm(id)),
    onChangeField: (field, value) => dispatch(editFilmField(field, value)),
    initializeForm: (id) => dispatch(initializeEditFilmForm(id)),
    clearForm: () => dispatch(clearEditFilmForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmEdit);