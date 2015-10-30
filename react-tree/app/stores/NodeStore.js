import makeStore from './utils/makeStore';
import Immutable from 'immutable';
import TreeExampleData from '../TreeExampleData';
import {ActionTypes} from '../constants/TreeConstants';
import updateTree from '../updateTree';

var nodes, selectedId;

nodes = Immutable.fromJS(TreeExampleData);

function updateById(nodes, id, mutation) {
    return updateTree(nodes, (n) => n.get('id') === id, mutation);
}

function onEvent(event, changed) {
    switch (event.key) {

        case ActionTypes.EXPAND_COLLAPSE:
            nodes = updateById(nodes, event.payload.node.get('id'), function (n) {
                return n.set('expanded', !n.get('expanded'));
            });
            changed();
            break;

        case ActionTypes.SELECT:
            selectedId = event.payload.node.get('id');
            changed();
            break;

        default:
            break;
    }
}

export default makeStore(onEvent, {getNodes: () => nodes, getSelectedId: ()=> selectedId});
