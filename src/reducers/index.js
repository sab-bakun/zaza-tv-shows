import * as types from '../constants/ActionTypes';
import { films } from '../data';

const initialState = {
    films
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_FILM:
            const filmIndex = state.films.findIndex(film => film.id === action.payload.id);
            
            if (filmIndex < 0) return state;

            const newFilms = state.films;
            newFilms[filmIndex] = {
                ...newFilms[filmIndex],
                ...action.payload
            };
            
            return { ...state, films: newFilms };
        default:
            return state;
    }
}
