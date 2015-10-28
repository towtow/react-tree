import {OrderedSet, Map} from 'immutable';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {call} from '../functions';

var emptyMap = new Map();
var callbacks = OrderedSet();

export default function (actionHandlers) {
    var dispatcherToken = AppDispatcher.register((event) => {
        var f = (event.key)(actionHandlers || emptyMap);
        return f ? f(event, () => callbacks.map(call)) : false;
    });

    return {
        dispatcherToken: dispatcherToken,
        addListener: (callback) => callbacks = callbacks.add(callback),
        removeListener: (callback) => callbacks = callbacks.remove(callback)
    };
};
