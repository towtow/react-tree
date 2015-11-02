import makeStore from './utils/makeStore';
import Immutable from 'immutable';
import TreeExampleData from '../TreeExampleData';
import {ActionTypes} from '../constants/TreeConstants';
import updateTree from '../updateTree';

var initialState = new Immutable.Map({
    nodes: Immutable.fromJS(TreeExampleData), prevSelectedId: null
});

var updateById = (nodes, nodeId, mutation) => {
    return updateTree(nodes, (n) => n.get('id') === nodeId, mutation);
};

var expandCollapse = (state, nodeId) => {
    return state.set('nodes', updateById(state.get('nodes'), nodeId, function (n) {
        return n.set('expanded', !n.get('expanded'));
    }));
};

var select = (state, nodeId) => {
    var s1 = state.set('nodes', updateById(state.get('nodes'), state.get('prevSelectedId'), function (n) {
        return n.set('selected', false);
    }));
    return s1.set('nodes', updateById(s1.get('nodes'), nodeId, function (n) {
        return n.set('selected', true);
    })).set('prevSelectedId', nodeId);
};

var onEvent = (event, state) => {
    switch (event.key) {
        case ActionTypes.EXPAND_COLLAPSE:
            return expandCollapse(state, event.payload.nodeId);

        case ActionTypes.SELECT:
            return select(state, event.payload.nodeId);
    }

    return state;
};

export default makeStore(initialState, onEvent);
