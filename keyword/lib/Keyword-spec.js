import Keyword from './Keyword';
import {Map} from 'immutable';

describe('Keywords', function () {
    it('represent themselves', function () {
        expect(Keyword('a')).toBe(Keyword('a'));
        expect(Keyword('a')).not.toBe(Keyword('b'));
    });
    it('are functions that get() their key', function () {
        var m = new Map([[Keyword('a'), 42]]);
        expect(Keyword('a')(m)).toBe(42);
        expect(Keyword('b')(m)).toBeUndefined();
    });
});
