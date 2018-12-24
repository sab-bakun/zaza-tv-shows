import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilmList from './../FilmList';
import FilmEdit from './../FilmEdit';
import { films } from './../../data.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: films,
            editFilmId: null
        }
    }

    onClickEdit = id => () => this.setState({ editFilmId: id });

    onClickCancel = () => this.setState({ editFilmId: null });
    
    onClickSave = film => () => {
        const { films, editFilmId } = this.state;

        const newFilms = [ ...films ];
        const filmIndex = films.findIndex(film => film.id === editFilmId);
        
        film.year = +film.year;
        newFilms[filmIndex] = { ...film };

        this.setState({ films: newFilms, editFilmId: null });
    }

    render() {
        const { films, editFilmId } = this.state;
        const film = films.find(film => film.id === editFilmId);

        return (
            <div className='App'>
                <header className='App-header'>
                    { 
                        film ? 
                        <FilmEdit film={film} onClickSave={this.onClickSave} onClickCancel={this.onClickCancel} /> : 
                        <FilmList films={films} onClickEdit={this.onClickEdit} /> 
                    }
                </header>
            </div>
        );
    }
}

App.propTypes = { 
    films: PropTypes.array, 
    editFilmId: PropTypes.string
};

export default App;
