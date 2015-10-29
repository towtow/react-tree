import AppDispatcher from '../dispatcher/AppDispatcher';
import Immutable from 'immutable';

var listeners = Immutable.OrderedSet(), dispatcherToken, log = Immutable.List();

function changed() {
    listeners.map((f) => f());
}

dispatcherToken = AppDispatcher.register((event) => {
    log = log.push(event);
    changed();
});

export default {
    addListener: (callback) => listeners = listeners.add(callback),
    removeListener: (callback) => listeners = listeners.remove(callback),
    getDispatcherToken: () => dispatcherToken,
    getLog: () => log
};
