import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/TreeConstants';

function nodeEvent(node, name) {
    AppDispatcher.dispatch({
        eventName: name,
        node: node
    });
}

export default {
    select: (node) => nodeEvent(node, ActionTypes.SELECT),
    expandCollapse: (node) => nodeEvent(node, ActionTypes.EXPAND_COLLAPSE)
};
