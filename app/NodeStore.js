import {EventEmitter} from 'events';
import copy from './copy';
import createMockModel from './createMockModel';

export default copy({}, EventEmitter.prototype, {
    _nodes: createMockModel(),
    getNodes: function () {
        return this._nodes;
    },
    toggleNode: function (node) {
        var i;
        for (i = 0; i < node.children.length; i++) {
            node.children[i].visible = !node.children[i].visible;
        }
        this.emit('change');
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});
