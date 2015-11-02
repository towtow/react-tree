import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../constants/TreeConstants';
import Immutable from 'immutable';

var event = (type, payload) => {
    AppDispatcher.dispatch(Immutable.fromJS({
        key: type, payload: payload
    }));
};

export default Object.freeze({
    select: (nodeId) => event(ActionTypes.SELECT, nodeId),
    expandCollapse: (nodeId) => event(ActionTypes.EXPAND_COLLAPSE, nodeId),
    loadData: (data) => event(ActionTypes.LOAD_DATA, data)
});
