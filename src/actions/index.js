import * as types from '../constants/ActionTypes';

export const editFilm = (id, name, year, description, country) => ({
    type: types.EDIT_FILM,
    payload: {
        id,
        name,
        year, 
        description, 
        country
    }
});