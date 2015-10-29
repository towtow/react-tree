import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/TreeConstants';

function event(type, payload) {
    AppDispatcher.dispatch({
        key: type, payload: payload
    });
}

export default {
    select: (node) => event(ActionTypes.SELECT, {node: node}),
    expandCollapse: (node) => event(ActionTypes.EXPAND_COLLAPSE, {node: node})
};
