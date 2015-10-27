import {Dispatcher} from 'flux';
import NodeStore from './NodeStore';

function _x(d, s) {
    var k;
    for (k in s) {
        d[k] = s[k];
    }
    return d;
}

var AppDispatcher = _x(new Dispatcher(), {
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
