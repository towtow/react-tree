import {List} from 'immutable';
import {call} from '../functions';

import {ActionTypes} from '../constants/TreeConstants';

export default function (actionHandlers, getGetters) {
    var callbacks = List();

    return {
        addListener: (callback) => callbacks = callbacks.push(callback),
        removeListener: (callback) => callbacks = callbacks.remove(callback),
        handleEvent: (e) => {
            var f = (e.eventKey)(actionHandlers);
            return f ? f(e, () => callbacks.map(call)) : false;
        }
    };
};
