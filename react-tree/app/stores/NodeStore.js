import mkStore from './utils/mkStore';
import Immutable from 'immutable';
import {ActionTypes} from '../constants/TreeConstants';
import updateTree from '../updateTree';

var updateById = (state, nodeId, mutation) => updateTree(state, (n) => n.get('id') === nodeId, mutation);

var toggleFieldFor = (field) => (node) => node.set(field, !node.get(field));

var onEvent = (key, payload, state) => {
    switch (key) {
        case ActionTypes.EXPAND_COLLAPSE:
            return updateById(state, payload, toggleFieldFor('expanded'));

        case ActionTypes.SELECT:
            return updateById(state, payload, toggleFieldFor('selected'));

        case ActionTypes.LOAD_DATA:
            return payload;
    }
    return state;
};

export default mkStore(Immutable.List(), onEvent);
