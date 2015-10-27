import React from 'react';
import TreeNode from './TreeNode';
import NodeStore from './NodeStore';

export default React.createClass({
    getInitialState: function () {
        return {nodes: NodeStore.getNodes()};
    },
    onChange: function () {
        this.setState({nodes: NodeStore.getNodes()});
    },
    componentDidMount: function () {
        NodeStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        NodeStore.removeChangeListener(this.onChange);
    },
    render: function () {
        var nodes = this.state.nodes.map(function (node) {
            return <TreeNode key={node.text} node={node}/>
        });
        return (
                <ul>
                    {nodes}
                </ul>
        );
    }
});
