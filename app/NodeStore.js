import {EventEmitter} from 'events';
import createMockModel from './createMockModel';

function _x(d, s) {
    var k;
    for (k in s) {
        d[k] = s[k];
    }
    return d;
}
export default _x(_x({}, EventEmitter.prototype), {
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
