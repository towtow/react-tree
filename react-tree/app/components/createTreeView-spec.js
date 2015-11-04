import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import createTreeView from './createTreeView.js';
import createStore from '../stores/utils/createStore';
import Immutable from 'immutable';

describe('TreeView', () => {
    it('renders without errors', () => {
        var store = createStore({
                                    register: () => {
                                    }
                                }, Immutable.fromJS([{id: 123, children: []}]), () => {
        });
        var TreeView = createTreeView(null, store);
        var tv = <TreeView/>;
        var c = ReactTestUtils.renderIntoDocument(tv);
    });
});
