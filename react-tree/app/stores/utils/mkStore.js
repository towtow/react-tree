import AppDispatcher from '../../dispatcher/AppDispatcher';
import Immutable from 'immutable';

function copy(d, ...ss) {
    return ss.reduce(function (acc, s) {
        for (var k in s) {
            acc[k] = s[k];
        }
        return acc;
    }, d);
}

export default function (initialState, eventHandler) {
    var listeners = Immutable.List();
    var state = initialState;
    var dispatcherToken = AppDispatcher.register((event) => {
        var newState = eventHandler(event, state);
        if (!Immutable.is(state, newState)) {
            state = newState;
            listeners.map((f) => f());
        }
    });

    return Object.freeze({
        addListener: (callback) => listeners = listeners.push(callback),
        removeListener: (callback) => listeners = listeners.remove(listeners.indexOf(callback)),
        getDispatcherToken: () => dispatcherToken,
        getState: () => state
    });
};
