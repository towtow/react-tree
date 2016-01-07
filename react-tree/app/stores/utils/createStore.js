import Immutable from 'immutable';

export default (dispatcher, initialState, eventHandler) => {
    let listeners = Immutable.List();
    let state = initialState;

    var dispatcherToken = dispatcher.register((event) => {
        const newState = eventHandler(event.get('key'), event.get('payload'), state, event);
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
