import {EventEmitter} from 'events';
import copy from '../copy';
import TreeExampleData from '../TreeExampleData';
import {ActionTypes} from '../constants/TreeConstants';
import Store from './Store';
import Immutable from 'immutable';

var nodes = TreeExampleData;
var selectedNode;

var NodeStore = Store(new Map([ //
    [ActionTypes.EXPAND_COLLAPSE, (e, changed) => {
        e.node.expanded = !e.node.expanded;
        changed();
    }], //
    [ActionTypes.SELECT, (e, changed) => {
        if (selectedNode) {
            selectedNode.selected = false;
        }
        e.node.selected = true;
        selectedNode = e.node;
        changed();
    }] //
]));
NodeStore.getNodes = () => nodes;

export default NodeStore;
