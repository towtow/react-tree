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
        var nodes = this.props.children.map(function (n) {
            if (n.visible) {
                return <TreeNode key={n.text} node={n} children={n.children}/>
            }
        });
        return (
                <li>
                    <span className="icon" onClick={this.toggle}>{this.props.node.icon()}</span>
                    <span>{this.props.node.text}</span>
                    <ul>{nodes}</ul>
                </li>
        );
    }
});

export default TreeNode;
