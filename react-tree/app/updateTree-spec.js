import Immutable from 'immutable';
import TreeExampleData from './TreeExampleData';

var nodes = Immutable.fromJS(TreeExampleData);

function updatePM(nodes, pred, mutation) {
    var emptyList = Immutable.List();

    function procNode(node) {
        if (pred(node)) {
            return mutation(node);
        }
        else {
            return node.set('children', (node.get('children') || emptyList).reduce(function (acc, c) {
                return acc.push(procNode(c));
            }, Immutable.List()));
        }
    }

    return nodes.reduce(function (acc, c) {
        return acc.push(procNode(c));
    }, Immutable.List());
}

function update(nodes, id, mutation) {
    return updatePM(nodes, (n) => n.get('id') === id, mutation);
}

describe('...', function () {
    it('...', function () {
        var usaKey = nodes.get(0).get('children').get(0).get('id');
        var nodesP = update(nodes, usaKey, function (n) {
            return n.set('text', 'U.S.A')
        });
        var usa2 = nodesP.get(0).get('children').get(0);
        expect(usa2.get('text')).toBe('U.S.A')
    });
});
