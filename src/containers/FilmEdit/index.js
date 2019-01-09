import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardContent, CardActions, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { editFilm } from '../../actions';
import './FilmEdit.css';

class FilmEdit extends Component {

    nameRef = React.createRef();
    yearRef = React.createRef();
    descriptionRef = React.createRef();
    countryRef = React.createRef();

    render() {
        const { name, banner, year, description, country } = this.props.films.find(film => film.id === this.props.match.params.id);

        return (
            <Card className='FilmEdit'>
                <CardHeader
                    title={ 
                        <TextField
                            className='FilmEdit-name'
                            label='Name'
                            defaultValue={name}
                            inputRef={this.nameRef}
                        />
                    }
                    subheader={
                        <div className='FilmEdit-textContainer'>
                            <TextField
                                className='FilmEdit-text'
                                label='Year'
                                type='number'
                                defaultValue={year}
                                inputRef={this.yearRef}
                            />
                            <TextField
                                className='FilmEdit-text'
                                label='Country'
                                defaultValue={country}
                                inputRef={this.countryRef}
                            />
                        </div>
                    }
                />
                <CardMedia
                    className='FilmEdit-banner'
                    image={'../' + banner}
                    title={name}
                />
                <CardContent>
                    <TextField
                        className='FilmEdit-description'
                        label='Description'
                        multiline
                        rowsMax='6'
                        defaultValue={description}
                        inputRef={this.descriptionRef}
                    />
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary' onClick={ 
                        () => {
                            this.props.onClickSave(
                                this.props.match.params.id,
                                this.nameRef.current.value,
                                +this.yearRef.current.value,
                                this.descriptionRef.current.value,
                                this.countryRef.current.value
                            );
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
    onClickSave: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    films: state.films
});

const mapDispatchToProps = (dispatch) => ({
    onClickSave: (...args) => dispatch(editFilm(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmEdit);