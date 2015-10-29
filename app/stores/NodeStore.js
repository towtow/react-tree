import AppDispatcher from '../dispatcher/AppDispatcher';
import Immutable from 'immutable';
import TreeExampleData from '../TreeExampleData';
import {ActionTypes} from '../constants/TreeConstants';

var listeners = Immutable.OrderedSet(), dispatcherToken, nodes, selectedNode;

nodes = TreeExampleData;

function changed() {
    listeners.map((f) => f());
}

dispatcherToken = AppDispatcher.register((event) => {
    switch (event.key) {
        case ActionTypes.EXPAND_COLLAPSE:
            event.payload.node.expanded = !event.payload.node.expanded;
            changed();
            break;
        case ActionTypes.SELECT:
            if (selectedNode) {
                selectedNode.selected = false;
            }
            event.payload.node.selected = true;
            selectedNode = event.payload.node;
            changed();
            break;
        default:
            break;
    }
});

export default {
    addListener: (callback) => listeners = listeners.add(callback),
    removeListener: (callback) => listeners = listeners.remove(callback),
    getDispatcherToken: () => dispatcherToken,
    getNodes: () => nodes
};
