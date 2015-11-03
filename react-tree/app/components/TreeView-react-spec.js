import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import mkTreeView from './mkTreeView.react';
import mkStore from '../stores/utils/mkStore';
import Immutable from 'immutable';

describe('TreeView', () => {
    it('renders without errors', () => {
        var store = mkStore({
            register: () => {
            }
        }, Immutable.fromJS([{id: 123, children: []}]), () => {
        });
        var TreeView = mkTreeView(null, store);
        var tv = <TreeView/>;
        var c = ReactTestUtils.renderIntoDocument(tv);

    });
});
