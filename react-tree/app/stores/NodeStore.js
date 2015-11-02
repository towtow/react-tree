import mkStore from './utils/mkStore';
import Immutable from 'immutable';
import TreeExampleData from '../TreeExampleData';
import {ActionTypes} from '../constants/TreeConstants';
import updateTree from '../updateTree';

var initialState = new Immutable.Map({
    nodes: Immutable.fromJS(TreeExampleData)
});

var updateById = (nodes, nodeId, mutation) => {
    return updateTree(nodes, (n) => n.get('id') === nodeId, mutation);
};

var expandCollapse = (state, nodeId) => {
    return state.set('nodes', updateById(state.get('nodes'), nodeId, function (n) {
        return n.set('expanded', !n.get('expanded'));
    }));
};

var toggleSelect = (state, nodeId) => {
    return state.set('nodes', updateById(state.get('nodes'), nodeId, function (n) {
        return n.set('selected', !n.get('selected', true));
    }));
};

var onEvent = (event, state) => {
    switch (event.key) {
        case ActionTypes.EXPAND_COLLAPSE:
            return expandCollapse(state, event.payload.nodeId);

        case ActionTypes.SELECT:
            return toggleSelect(state, event.payload.nodeId);
    }

    return state;
};

export default mkStore(initialState, onEvent);
