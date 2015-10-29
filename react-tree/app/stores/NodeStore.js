import makeStore from './utils/makeStore';
import Immutable from 'immutable';
import TreeExampleData from '../TreeExampleData';
import {ActionTypes} from '../constants/TreeConstants';

var nodes, selectedNode;

nodes = TreeExampleData;

function onEvent(event, changed) {
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
}

export default makeStore(onEvent, {getNodes: () => nodes});
