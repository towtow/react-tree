import Immutable from 'immutable';

var emptyList = Immutable.List();

export default (nodes, predicate, mutation) => {

    var procNode = (node) => {
        var node2 = predicate(node) ? mutation(node) : node;
        return node2.set('children', procLevel(node.get('children') || emptyList));
    };

    var procLevel = (ns) => {
        return ns.reduce((acc, c) => acc.push(procNode(c)), emptyList);
    };

    return procLevel(nodes);
};
