import mkStore from './utils/mkStore';
import Immutable from 'immutable';
import {ActionTypes} from '../constants/TreeConstants';
import updateTree from '../updateTree';

export default (dispatcher) => {
    var updateNodeById = (state, nodeId, mutation) => updateTree(state, (n) => n.get('id') === nodeId, mutation);

    var fieldTogglerFor = (field) => (node) => node.set(field, !node.get(field));

    var onEvent = (key, payload, state) => {
        switch (key) {
            case ActionTypes.EXPAND_COLLAPSE:
                return updateNodeById(state, payload, fieldTogglerFor('expanded'));

            case ActionTypes.SELECT:
                return updateNodeById(state, payload, fieldTogglerFor('selected'));

            case ActionTypes.LOAD_DATA:
                return payload;
        }
        return state;
    };

    return mkStore(dispatcher, Immutable.List(), onEvent)
};
