import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCourseSuccess(courses){
    return { type: types.LOAD_COURSES_SUCESS, courses}
}


export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    }
}