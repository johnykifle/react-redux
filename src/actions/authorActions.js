import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors){
    return { type: types.LOAD_AUTHORS_SUCESS, authors};
}

export function updateAuthorSuccess(author){
    return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}

export function loadAuthors(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}

export function updateAuthor(author){
    return function(dispatch){
        return authorApi.updateAuthor(author).then(author => {
            dispatch(updateAuthorSuccess(author));
        }).catch(error => {
            throw(error);
        });
    };
}