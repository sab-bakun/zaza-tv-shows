import { SAVE_FILM, EDIT_FILM_FIELD, INITIALIZE_EDIT_FILM_FORM, CLEAR_EDIT_FILM_FORM } from '../constants/ActionTypes';

export const saveFilm = (id) => ({
    type: SAVE_FILM,
    payload: {
        id
    }
});

export const editFilmField = (field, value) => ({
    type: EDIT_FILM_FIELD,
    payload: {
        field,
        value
    }
});

export const initializeEditFilmForm = (id) => ({
    type: INITIALIZE_EDIT_FILM_FORM,
    payload: {
        id
    }
});

export const clearEditFilmForm = () => ({
    type: CLEAR_EDIT_FILM_FORM
});


