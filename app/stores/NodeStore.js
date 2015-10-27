import {EventEmitter} from 'events';
import copy from '../copy';
import TreeExampleData from '../TreeExampleData';
import Node from '../Node';
import {ActionTypes} from '../constants/TreeConstants';
import mkEventEmitter from '../mkEventEmitter';

var nodes = TreeExampleData, selectedNode;

var NodeStore = mkEventEmitter({
    getNodes: function () {
        return nodes;
    },
    handleEvent(e) {
        switch (e.eventName) {
            case ActionTypes.EXPAND_COLLAPSE:
                e.node.expanded = !e.node.expanded;
                break;
            case ActionTypes.SELECT:
                if (selectedNode) {
                    selectedNode.selected = false;
                }
                e.node.selected = true;
                selectedNode = e.node;
                break;
        }
        NodeStore.trigger();
        return true;
    }});

export default NodeStore;
