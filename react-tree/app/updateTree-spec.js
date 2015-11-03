import Immutable from 'immutable';
import TreeExampleData from './TreeExampleData';
import update from './updateTree';

var nodes = TreeExampleData;

describe('update tree', () => {
    it('works', () => {
        var usaKey = nodes.get(0).get('children').get(0).get('id');
        var swedenKey = nodes.get(1).get('children').get(1).get('id');
        var pred = (n) => n.get('id') === usaKey || n.get('id') === swedenKey;

        var nodesP = update(nodes, pred, (n) => n.set('text', 'xxx ' + n.get('text')));

        var usa2 = nodesP.get(0).get('children').get(0);
        expect(usa2.get('text')).toBe('xxx USA');
        var sweden2 = nodesP.get(1).get('children').get(1);
        expect(sweden2.get('text')).toBe('xxx Sweden');
    });
});
