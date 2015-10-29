import {Map} from 'immutable';

var keywords = new Map();

export default function (name) {
    if (!keywords.has(name)) {
        var key = function (map) {
            return map.get(key);
        };
        keywords = keywords.set(name, key);
    }
    return keywords.get(name);
}
