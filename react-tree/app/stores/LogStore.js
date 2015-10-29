import makeStore from './utils/makeStore';
import Immutable from 'immutable';

var log = Immutable.List();

function onEvent(event, changed) {
    log = log.push(event);
    changed();
}

export default makeStore(onEvent, {getLog: () => log});
