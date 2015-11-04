import createStore from './utils/createStore';
import Immutable from 'immutable';

export default (dispatcher) => {
    return createStore(dispatcher, Immutable.List(), (_key, _payload, state, event) => state.push(event));
}
