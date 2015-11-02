import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import NodeStore from '../stores/NodeStore';
import mkTreeView from './mkTreeView.react';

var TreeView = mkTreeView(NodeStore);

describe('asd', () => {
    it('asd', () => {
        var tv = <TreeView/>;
        var c = ReactTestUtils.renderIntoDocument(tv);
    });
});
