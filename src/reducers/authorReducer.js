import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
    switch(action.type){
        case types.LOAD_AUTHORS_SUCESS:
            return action.authors;
        case types.UPDATE_AUTHOR_SUCCESS:
            const authors = [
                ...state.filter(author => author.id != action.author.id),
                Object.assign({}, action.author)
            ];
            return authors;
        default:
            return state;
    }
}