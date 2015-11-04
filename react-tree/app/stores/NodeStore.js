import createStore from './utils/createStore';
import Immutable from 'immutable';
import TreeActionTypes from '../constants/TreeActionTypes';
import updateTree from '../updateTree';

export default (dispatcher) => {
    var updateNodeById = (state, nodeId, mutation) => updateTree(state, (n) => n.get('id') === nodeId, mutation);

    var fieldTogglerFor = (field) => (node) => node.set(field, !node.get(field));

    var onEvent = (key, payload, state) => {
        switch (key) {
            case TreeActionTypes.TREE_EXPAND_COLLAPSE:
                return updateNodeById(state, payload, fieldTogglerFor('expanded'));

            case TreeActionTypes.TREE_SELECT:
                return updateNodeById(state, payload, fieldTogglerFor('selected'));

            case TreeActionTypes.TREE_LOAD_DATA:
                return payload;
        }
        return state;
    };

    return createStore(dispatcher, Immutable.List(), onEvent)
};
