import {ActionTypes} from '../constants/TreeConstants';
import Immutable from 'immutable';

export default function (dispatcher) {
    var event = (type, payload) => {
        dispatcher.dispatch(Immutable.fromJS({
            key: type, payload: payload
        }));
    };

    return Object.freeze({
        select: (nodeId) => event(ActionTypes.SELECT, nodeId),
        expandCollapse: (nodeId) => event(ActionTypes.EXPAND_COLLAPSE, nodeId),
        loadData: (data) => event(ActionTypes.LOAD_DATA, data)
    });
}
