import mkStore from './utils/mkStore';
import Immutable from 'immutable';

export default mkStore(Immutable.List(), function onEvent(event, state) {
    return state.push(event);
});
