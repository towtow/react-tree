import React from 'react';
import TreeActionCreator from '../actions/TreeActionCreator';
import Immutable from 'immutable';
import log from '../log';

export default function (nodeStore) {
    var TreeNode = React.createClass({
        shouldComponentUpdate: function (nextProps, nextState) {
            return !Immutable.is(this.props.node, nextProps.node);
        }, //
        render: function () {
            function toggle(e) {
                TreeActionCreator.expandCollapse(nodeId);
                e.stopPropagation();
            }

            function select(e) {
                TreeActionCreator.select(nodeId);
                e.stopPropagation();
            }

            log.imsg(this.props.level, 'TreeNode', this.props.node.get('text'));
            var props = this.props, node = props.node, childNodes, nodeId = node.get('id');
            var expanded = node.get('expanded');
            if (expanded) {
                childNodes = <TreeLevel nodes={node.get('children')} level={props.level + 1}/>;
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

    var TreeLevel = function (props) {
        var childNodes = (props.nodes || []).map(function (node) {
            return <TreeNode key={node.get('id')} node={node} level={props.level}/>
        });
        return (
                <ul>
                    {childNodes}
                </ul>
        );
    };

    function getStoreState() {
        return {nodes: nodeStore.getState()};
    }

    return React.createClass({
        getInitialState: function () {
            return getStoreState();
        }, //
        onChange: function () {
            this.setState(getStoreState());
        }, //
        componentDidMount: function () {
            nodeStore.addListener(this.onChange);
        }, //
        componentWillUnmount: function () {
            nodeStore.removeListener(this.onChange);
        }, //
        render: function () {
            return (
                    <div className="tree">
                        <TreeLevel nodes={this.state.nodes} level={1}/>
                    </div>
            );
        }
    });
};
