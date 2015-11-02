import KeywordMap from './KeywordMap';
import Keyword from './Keyword';

describe('KeywordMaps', function () {
    it('are empty when constructed empty', function () {
        expect(KeywordMap()).toEqual({});
        expect(KeywordMap([])).toEqual({});
    });
    it('create objects that map keys to corresponding keywords', function () {
        expect(KeywordMap(['a'])).toEqual({a: Keyword('a')});
        expect(KeywordMap(['a'])['a']).toBe(Keyword('a'));
        expect(KeywordMap(['a', 'b'])['b']).toBe(Keyword('b'));
    });
});
