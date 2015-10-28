import {EventEmitter} from 'events';
import copy from '../copy';
import TreeExampleData from '../TreeExampleData';
import {ActionTypes} from '../constants/TreeConstants';
import Store from './Store';
import Immutable from 'immutable';

var nodes = TreeExampleData;
var selectedNode;

var NodeStore = Store(new Immutable.Map([ //
    [ActionTypes.EXPAND_COLLAPSE, (event, changed) => {
        event.node.expanded = !event.node.expanded;
        changed();
    }], //
    [ActionTypes.SELECT, (event, changed) => {
        if (selectedNode) {
            selectedNode.selected = false;
        }
        event.node.selected = true;
        selectedNode = event.node;
        changed();
    }] //
]));
NodeStore.getNodes = () => nodes;

export default NodeStore;
