import makeStore from './utils/makeStore';
import Immutable from 'immutable';
import TreeExampleData from '../TreeExampleData';
import {ActionTypes} from '../constants/TreeConstants';

var nodes, selectedKey;

nodes = Immutable.fromJS(TreeExampleData);

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

function update(nodes, key, mutation) {
    return updatePM(nodes, (n) => n.get('key') === key, mutation);
}

function onEvent(event, changed) {
    var setSelected = (b) => (n) => n.set('selected', b);

    switch (event.key) {

        case ActionTypes.EXPAND_COLLAPSE:
            nodes = update(nodes, event.payload.node.get('key'), function (n) {
                return n.set('expanded', !n.get('expanded'));
            });
            changed();
            break;

        case ActionTypes.SELECT:
            nodes = update(update(nodes, selectedKey, setSelected(false)), event.payload.node.get('key'), setSelected(true));
            selectedKey = event.payload.node.get('key');
            changed();
            break;

        default:
            break;
    }
}

export default makeStore(onEvent, {getNodes: () => nodes});
