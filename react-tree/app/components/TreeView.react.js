import React from 'react';
import NodeStore from '../stores/NodeStore';
import TreeActionCreator from '../actions/TreeActionCreator';

function TreeNode(props) {
    var node = props.node, childNodes;

    function toggle(e) {
        TreeActionCreator.expandCollapse(node);
        e.stopPropagation();
    }

    function select(e) {
        TreeActionCreator.select(node);
        e.stopPropagation();
    }

    if (node.get('expanded')) {
        childNodes = <TreeLevel nodes={node.get('children')} selectedId={props.selectedId}/>;
    }
    var icon = node.get('children').count() > 0 ? (node.get('expanded') ? '-' : '+') : undefined;
    return (
            <li>
                <div className={node.get('id') === props.selectedId ? 'tree-selected' : ''} onDoubleClick={toggle}>
                    <span className="tree-icon" onClick={toggle}>{icon}</span>
                    <span className="tree-label" onClick={select}>{node.get('text')}</span>
                </div>
                {childNodes}
            </li>
    );
}

function TreeLevel(props) {
    var childNodes = props.nodes.map(function (node) {
        return <TreeNode key={node.get('id')} node={node} selectedId={props.selectedId}/>
    });
    return (
            <ul>
                {childNodes}
            </ul>
    );
}

function getDataFromStore() {
    return {nodes: NodeStore.getNodes(), selectedId: NodeStore.getSelectedId()}
}

export default React.createClass({
    getInitialState: function () {
        return getDataFromStore();
    }, onChange: function () {
        this.setState(getDataFromStore());
    }, componentDidMount: function () {
        NodeStore.addListener(this.onChange);
    }, componentWillUnmount: function () {
        NodeStore.removeListener(this.onChange);
    }, render: function () {
        return (
                <div className="tree">
                    <TreeLevel nodes={this.state.nodes} selectedId={this.state.selectedId}/>
                </div>
        );
    }
});
