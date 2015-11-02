import React from 'react';
import NodeStore from '../stores/NodeStore';
import TreeActionCreator from '../actions/TreeActionCreator';
import Immutable from 'immutable';

var TreeNode = React.createClass({
    shouldComponentUpdate: function (nextProps, nextState) {
        return !Immutable.is(this.props.node, nextProps.node);
    }, render: function () {
        var props = this.props, node = props.node, childNodes, nodeId = node.get('id');

        console.log('Render <TreeNode>', nodeId, node.get('text'));

        function toggle(e) {
            TreeActionCreator.expandCollapse(nodeId);
            e.stopPropagation();
        }

        function select(e) {
            TreeActionCreator.select(nodeId);
            e.stopPropagation();
        }

        var expanded = node.get('expanded');
        if (expanded) {
            childNodes = <TreeLevel nodes={node.get('children')}/>;
        }
        var icon = node.get('children').count() > 0 ? (expanded ? '-' : '+') : undefined;
        return (
                <li>
                    <div className={node.get('selected') ? 'tree-selected' : ''} onDoubleClick={toggle}>
                        <span className="tree-icon" onClick={toggle}>{icon}</span>
                        <span className="tree-label" onClick={select}>{node.get('text')}</span>
                    </div>
                    {childNodes}
                </li>
        );
    }
});

var TreeLevel = React.createClass({
    render: function () {
        console.log('Render <TreeLevel>');

        var props = this.props;
        var childNodes = props.nodes.map(function (node) {
            return <TreeNode key={node.get('id')} node={node}/>
        });
        return (
                <ul>
                    {childNodes}
                </ul>
        );
    }
});

function getStoreState() {
    return {
        nodes: NodeStore.getState().get('nodes')
    };
}

export default React.createClass({
    getInitialState: function () {
        return getStoreState();
    }, onChange: function () {
        this.setState(getStoreState());
    }, componentDidMount: function () {
        NodeStore.addListener(this.onChange);
    }, componentWillUnmount: function () {
        NodeStore.removeListener(this.onChange);
    }, render: function () {
        console.log('> Render <TreeView>');
        return (
                <div className="tree">
                    <TreeLevel nodes={this.state.nodes}/>
                </div>
        );
    }
});
