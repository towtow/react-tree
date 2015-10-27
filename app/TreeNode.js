import React from 'react';
import AppDispatcher from './AppDispatcher';

var TreeNode = React.createClass({
    toggle: function (e) {
        AppDispatcher.dispatch({
            eventName: 'expand-collapse',
            node: this.props.node
        });
    },
    render: function () {
        var childNodes;
        if (this.props.node.expanded) {
            childNodes = this.props.node.children.map(function (node) {
                return <TreeNode key={node.text} node={node}/>
            });
        }
        return (
                <li>
                    <span className="icon" onClick={this.toggle}>{this.props.node.icon()}</span>
                    <span>{this.props.node.text}</span>
                    <ul>{childNodes}</ul>
                </li>
        );
    }
});

export default TreeNode;
