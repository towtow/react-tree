import Immutable from 'immutable';

export default function (nodes, pred, mutation) {
    var emptyList = Immutable.List();

    function procNode(node) {
        if (pred(node)) {
            return mutation(node);
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
