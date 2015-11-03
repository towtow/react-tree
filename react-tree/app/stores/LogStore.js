import mkStore from './utils/mkStore';
import Immutable from 'immutable';

export default (dispatcher) => {
    return mkStore(dispatcher, Immutable.List(), (_key, _payload, state, event) => state.push(event));
}
