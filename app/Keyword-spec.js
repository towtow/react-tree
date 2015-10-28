import Keyword from './Keyword';
import {Map} from 'immutable';

describe('Keywords', function () {
    it('represent only themselves', function () {
        expect(Keyword('a') === Keyword('a')).toBe(true);
        expect(Keyword('a') !== Keyword('b')).toBe(true);
    });
    it('are functions that get() their key', function () {
        var m = new Map([[Keyword('a'), true]]);
        expect(Keyword('a')(m)).toBe(true);
        expect(Keyword('b')(m)).toBeUndefined();
    });
});
