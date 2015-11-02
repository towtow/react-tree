import Immutable from 'immutable';

var emptyList = Immutable.List();

export default (nodes, predicate, mutation) => {

    var procNode = (node) => {
        if (predicate(node)) {
            var changedNode = mutation(node);
            return changedNode.set('children', procLevel(node.get('children') || emptyList));
        }
        else {
            return node.set('children', procLevel(node.get('children') || emptyList));
        }
    };

    var procLevel = (ns) => {
        return ns.reduce((acc, c) => acc.push(procNode(c)), emptyList);
    };

    return procLevel(nodes);
};
