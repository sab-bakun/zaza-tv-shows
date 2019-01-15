import { SAVE_FILM, EDIT_FILM_FIELD, INITIALIZE_EDIT_FILM_FORM, CLEAR_EDIT_FILM_FORM } from '../constants/ActionTypes';
import { films } from '../data';

const initialState = {
    films,
    editFieldName: '',
    editFieldYear: 0,
    editFieldCountry: '',
    editFieldDescription: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FILM:
            const saveFilmIndex = state.films.findIndex(film => film.id === action.payload.id);
            if (saveFilmIndex < 0) return state;
            const newFilms = state.films;
            newFilms[saveFilmIndex] = {
                ...newFilms[saveFilmIndex],
                name: state.editFieldName,
                year: state.editFieldYear,
                country: state.editFieldCountry,
                description: state.editFieldDescription
            };
            return { 
                ...state, 
                films: newFilms 
            };
        case EDIT_FILM_FIELD:
            let newValue = action.payload.value;
            if (action.payload.field === 'editFieldYear') newValue = +newValue;
            return { 
                ...state, 
                [action.payload.field]: newValue
            };
        case INITIALIZE_EDIT_FILM_FORM:
            const editFilmIndex = state.films.findIndex(film => film.id === action.payload.id);
            if (editFilmIndex < 0) return state;
            return { 
                ...state, 
                editFieldName: state.films[editFilmIndex].name,
                editFieldYear: state.films[editFilmIndex].year,
                editFieldCountry: state.films[editFilmIndex].country,
                editFieldDescription: state.films[editFilmIndex].description 
            };
        case CLEAR_EDIT_FILM_FORM:
            return { 
                ...state, 
                editFieldName: '',
                editFieldYear: 0,
                editFieldCountry: '',
                editFieldDescription: '' 
            };
        default:
            return state;
    }
}
