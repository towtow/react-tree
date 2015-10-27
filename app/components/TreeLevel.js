import React from 'react';
import TreeActionCreator from '../actions/TreeActionCreator';

var TreeNode, TreeLevel;

TreeNode = React.createClass({
    toggle: function (e) {
        TreeActionCreator.expandCollapse(this.props.node);
        e.stopPropagation();
    },
    select: function (e) {
        TreeActionCreator.select(this.props.node);
        e.stopPropagation();
    },
    render: function () {
        var node = this.props.node, childNodes;
        if (node.expanded) {
            childNodes = <TreeLevel nodes={node.children}/>;
        }
        var icon = node.children.length > 0 ? (node.expanded ? '-' : '+') : undefined;
        return (
                <li>
                    <div className={node.selected ? 'tree-selected' : ''} onDoubleClick={this.toggle}>
                        <span className="tree-icon" onClick={this.toggle}>{icon}</span>
                        <span className="tree-label"  onClick={this.select}>{node.text}</span>
                    </div>
                    {childNodes}
                </li>
        );
    }
});

TreeLevel = React.createClass({
    render: function () {
        var childNodes = this.props.nodes.map(function (node) {
            return <TreeNode key={node.key} node={node}/>
        });
        return (
                <ul>
                    {childNodes}
                </ul>
        );
    }
});

export default TreeLevel;
