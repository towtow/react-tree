import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/TreeConstants';
import Immutable from 'immutable';

function event(type, payload) {
    AppDispatcher.dispatch(Immutable.fromJS({
        key: type, payload: payload
    }));
}

export default {
    select: (nodeId) => event(ActionTypes.SELECT, {nodeId: nodeId}),
    expandCollapse: (nodeId) => event(ActionTypes.EXPAND_COLLAPSE, {nodeId: nodeId})
};
