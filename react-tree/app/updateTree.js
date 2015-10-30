import Immutable from 'immutable';

var emptyList = Immutable.List();

export default function (nodes, predicate, mutation) {

    function procNode(node) {
        if (predicate(node)) {
            var changedNode = mutation(node);
            return changedNode.set('children', procLevel(node.get('children') || emptyList));
        }
        else {
            return node.set('children', procLevel(node.get('children') || emptyList));
        }
    }

    function procLevel(ns) {
        return ns.reduce(function (acc, c) {
            return acc.push(procNode(c));
        }, emptyList);
    }

    return procLevel(nodes);
};
