import React from 'react';
import TreeActionCreator from '../actions/TreeActionCreator';

function TreeNode(props) {
    function toggle(e) {
        TreeActionCreator.expandCollapse(props.node);
        e.stopPropagation();
    }

    function select(e) {
        TreeActionCreator.select(props.node);
        e.stopPropagation();
    }

    var node = props.node, childNodes;
    if (node.expanded) {
        childNodes = <TreeLevel nodes={node.children}/>;
    }
    var icon = node.children.length > 0 ? (node.expanded ? '-' : '+') : undefined;
    return (
            <li>
                <div className={node.selected ? 'tree-selected' : ''} onDoubleClick={toggle}>
                    <span className="tree-icon" onClick={toggle}>{icon}</span>
                    <span className="tree-label" onClick={select}>{node.text}</span>
                </div>
                {childNodes}
            </li>
    );
}

function TreeLevel(props) {
    var childNodes = props.nodes.map(function (node) {
        return <TreeNode key={node.key} node={node}/>
    });
    return (
            <ul>
                {childNodes}
            </ul>
    );
}

export default TreeLevel;
