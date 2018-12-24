import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardContent, CardActions, TextField, Button } from '@material-ui/core';

import './FilmEdit.css';

class FilmEdit extends Component {
    constructor(props) {
        super(props);

        this.state = { ...props.film };
    }

    onChangeField = field => event => this.setState({ [field]: event.target.value });

    render() {
        const { name, banner, year, description, country } = this.state;
        const { onClickCancel, onClickSave } = this.props;

        return (
            <Card className='FilmEdit'>
                <CardHeader
                    title={ 
                        <TextField
                            className='FilmEdit-name'
                            label='Name'
                            value={name}
                            onChange={this.onChangeField('name')}
                        />
                    }
                    subheader={
                        <div className='FilmEdit-textContainer'>
                            <TextField
                                className='FilmEdit-text'
                                label='Year'
                                type='number'
                                value={year}
                                onChange={this.onChangeField('year')}
                            />
                            <TextField
                                className='FilmEdit-text'
                                label='Country'
                                value={country}
                                onChange={this.onChangeField('country')}
                            />
                        </div>
                    }
                />
                <CardMedia
                    className='FilmEdit-banner'
                    image={banner}
                    title={name}
                />
                <CardContent>
                    <TextField
                        className='FilmEdit-description'
                        label='Description'
                        multiline
                        rowsMax='6'
                        value={description}
                        onChange={this.onChangeField('description')}
                    />
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary' onClick={onClickSave(this.state)}>
                        Save
                    </Button>
                    <Button size='small' color='secondary' onClick={onClickCancel}>
                        Cancel
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

FilmEdit.propTypes = { 
    name: PropTypes.string,
    year: PropTypes.number,
    country: PropTypes.string,
    description: PropTypes.string,
    banner: PropTypes.string,
    onClickCancel: PropTypes.func,
    onClickSave: PropTypes.func
};

export default FilmEdit;