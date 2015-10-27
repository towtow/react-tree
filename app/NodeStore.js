import {EventEmitter} from 'events';
import copy from './copy';
import createTestNodes from './createTestNodes';
var nodes = createTestNodes();
export default copy({}, EventEmitter.prototype, {
    getNodes: function () {
        return nodes;
    },
    toggleNode: function (node) {
        node.expanded = !node.expanded;
        this.emit('change');
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});
