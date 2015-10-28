import Store from './Store';
import Keyword from '../Keyword';
import {Map} from 'immutable';
import AppDispatcher from '../dispatcher/AppDispatcher';

describe('Store', function () {
    var store, called, callbackCalled, token;

    function listener1() {
        callbackCalled += '1';
    }

    function listener2() {
        callbackCalled += '2';
    }

    function sendEvent(x) {
        AppDispatcher.dispatch({key: Keyword(x)});
    }

    beforeEach(function () {
        store = Store(new Map([ //
            [Keyword('a'), (event, changed) => {
                called = 'a';
                changed();
            }], //
            [Keyword('b'), (e, changed) => {
                called = 'b';
            }] //
        ]));
        token = store.dispatcherToken;
        called = undefined;
        callbackCalled = '';
    });

    afterEach(function () {
        AppDispatcher.unregister(token);
    });

    it('will receive events from the dispatcher after being created', function () {
        sendEvent('a');
        expect(called).toBe('a');
        expect(callbackCalled).toBe('');
    });

    it('will receive events from the dispatcher after being created', function () {
        sendEvent('b');
        expect(called).toBe('b');
        expect(callbackCalled).toBe('');
    });

    it('will not receive events after being unregistered from the dispatcher', function () {
        AppDispatcher.unregister(store.dispatcherToken);
        sendEvent('a');
        expect(called).toBeUndefined();
        expect(callbackCalled).toBe('');
        token = AppDispatcher.register(store);
    });

    it('callbacks can raise change event which is passed to the registered listeners', function () {
        store.addListener(listener1);
        store.addListener(listener2);
        store.addListener(listener1);
        sendEvent('a');
        expect(called).toBe('a');
        expect(callbackCalled).toBe('12');
    });

    it('can add/remove callbacks', function () {
        store.addListener(listener1);
        store.addListener(listener2);
        store.addListener(listener1);
        store.removeListener(listener1);
        sendEvent('a');
        expect(called).toBe('a');
        expect(callbackCalled).toBe('2');
    });

    it('unknown events are ignored', function () {
        sendEvent('a');
        expect(called).toBe('a');
        expect(callbackCalled).toBe('2');
    });
});
