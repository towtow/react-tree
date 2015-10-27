import {Dispatcher} from 'flux';
import NodeStore from './NodeStore';
import copy from './copy';

var AppDispatcher = copy(new Dispatcher(), {
    handleViewAction: function (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});
AppDispatcher.register(function (payload) {
    switch (payload.eventName) {
        case 'expand-collapse':
            NodeStore.toggleNode(payload.node);
            break;
    }
    return true;
});

export default AppDispatcher;
