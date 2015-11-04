import TreeActionTypes from '../constants/TreeActionTypes';
import Immutable from 'immutable';

export default function (dispatcher) {
    var event = (type, payload) => {
        dispatcher.dispatch(Immutable.fromJS({
                                                 key: type, payload: payload
                                             }));
    };

    return Object.freeze({
                             select: (nodeId) => event(TreeActionTypes.TREE_SELECT, nodeId),
                             expandCollapse: (nodeId) => event(TreeActionTypes.TREE_EXPAND_COLLAPSE, nodeId),
                             loadData: (data) => event(TreeActionTypes.TREE_LOAD_DATA, data)
                         });
}
