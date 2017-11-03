import expect from 'expect';
import {authorsFormattedForDropDown} from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropDown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'johnK', firstName: 'john', lastName: 'kifle'},
                {id: 'rachel', firstName: 'Rahel', lastName: 'Tesfay'},
            ];

            const expected = [
                {value: 'johnK', text: 'john kifle'},
                {value: 'rachel', text: 'Rahel Tesfay'},
            ];

            expect(authorsFormattedForDropDown(authors)).toEqual(expected);
        });
    });
});
