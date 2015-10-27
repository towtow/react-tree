import {List} from 'immutable';
import {call} from './functions';

export default function (o) {
    var callbacks = List();

    o.addListener = (callback) => callbacks = callbacks.push(callback);
    o.removeListener = (callback) => callbacks = callbacks.remove(callback);
    o.trigger = () => callbacks.map(call);

    return o;
};
