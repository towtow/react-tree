import makeStore from './utils/makeStore';
import Immutable from 'immutable';

export default makeStore(Immutable.List(), function onEvent(event, state) {
    return state.push(event);
});
