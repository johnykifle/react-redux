import expect from 'expect';
import React from 'react';
import * as types from './actionTypes';
import * as authorActions from './authorActions';

import thunk from 'redux-thunk';
import nock from  'nock';
import configureMockStore from 'redux-mock-store';

describe('Author actions', () => {
  it('Should create load authors success action creator r', () =>{
    // arrange
    const authors = [
      {id: 'johnK', firstName: 'john', lastName: 'kifle'},
      {id: 'rachel', firstName: 'Rahel', lastName: 'Tesfay'}
    ];

    const expected = {
      type: types.LOAD_AUTHORS_SUCESS,
      authors
    };

    // act
    const action = authorActions.loadAuthorsSuccess(authors);

    // assert
    expect(action).toEqual(expected);

  });

  it('Should create update author success action creator ', () => {
    // arrange
    const author = {id: 'johnK', firstName: 'john', lastName: 'kifle'};
    const expected = { type: types.UPDATE_AUTHOR_SUCCESS, author};

    //act
    const action = authorActions.updateAuthorSuccess(author);

    // assert
    expect(action).toEqual(expected);
  });

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  it('should create BEGIN_AJAX_CALL and LOAD_Authors_SUCCESS when loading authors', (done) => {
    // arrange
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCESS,
         body: {authors: [
          {id: 'johnK', firstName: 'john', lastName: 'kifle'}
         ]}}
    ];

    const store = mockStore({authors: []}, expectedActions);
    store.dispatch(authorActions.loadAuthors()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect (actions[1].type).toEqual(types.LOAD_AUTHORS_SUCESS);
      done();
    });
  });
});
