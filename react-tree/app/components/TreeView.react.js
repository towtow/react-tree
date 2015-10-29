import React from 'react';
import NodeStore from '../stores/NodeStore';
import TreeActionCreator from '../actions/TreeActionCreator';

function TreeLevel(props) {
    var TreeNode = function (props) {
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
            childNodes = <TreeLevel nodes={node.get('children')}/>;
        }
        var icon = node.get('children').count() > 0 ? (node.get('expanded') ? '-' : '+') : undefined;
        return (
                <li>
                    <div className={node.get('selected') ? 'tree-selected' : ''} onDoubleClick={toggle}>
                        <span className="tree-icon" onClick={toggle}>{icon}</span>
                        <span className="tree-label" onClick={select}>{node.get('text')}</span>
                    </div>
                    {childNodes}
                </li>
        );
    };

    var childNodes = props.nodes.map(function (node) {
        return <TreeNode key={node.get('key')} node={node}/>
    });
    return (
            <ul>
                {childNodes}
            </ul>
    );
}

export default React.createClass({
    getInitialState: function () {
        return {nodes: NodeStore.getNodes()};
    }, onChange: function () {
        this.setState({nodes: NodeStore.getNodes()});
    }, componentDidMount: function () {
        NodeStore.addListener(this.onChange);
    }, componentWillUnmount: function () {
        NodeStore.removeListener(this.onChange);
    }, render: function () {
        return (
                <div className="tree">
                    <TreeLevel nodes={this.state.nodes}/>
                </div>
        );
    }
});
