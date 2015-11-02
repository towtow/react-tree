import mkStore from './utils/mkStore';
import Immutable from 'immutable';

export default mkStore(Immutable.List(), function onEvent(_key, _payload, state, event) {
    return state.push(event);
});
