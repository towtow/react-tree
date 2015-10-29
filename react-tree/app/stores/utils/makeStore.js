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

export default function (eventHandler, getters) {
    var listeners = Immutable.List();

    var dispatcherToken = AppDispatcher.register((event) => {
        eventHandler(event, () => listeners.map((f) => f()));
    });

    return Object.freeze(copy({},
            getters,
            {
                addListener: (callback) => listeners = listeners.push(callback),
                removeListener: (callback) => listeners = listeners.remove(listeners.indexOf(callback)),
                getDispatcherToken: () => dispatcherToken
            }));
};
