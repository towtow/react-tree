import './TreeView.styl';

import React from 'react';
import createTreeActionCreator from '../actions/TreeActionCreator';
import Immutable from 'immutable';
import log from '../log';

export default (dispatcher, nodeStore) => {
    var TreeActionCreator = createTreeActionCreator(dispatcher);

    function getStoreState() {
        return {nodes: nodeStore.getState()};
    }

    var TreeNode = React.createClass({
                                         shouldComponentUpdate: function (nextProps/*, nextState*/) {
                                             return !Immutable.is(this.props.node, nextProps.node);
                                         }, //
                                         render: function () {
                                             var expandCollapse = (e) => {
                                                 TreeActionCreator.expandCollapse(nodeId);
                                                 e.stopPropagation();
                                             };

                                             var select = (e) => {
                                                 TreeActionCreator.select(nodeId);
                                                 e.stopPropagation();
                                             };

                                             var props = this.props, node = props.node, childNodes, nodeId = node.get('id');
                                             log.imsg(props.level, 'TreeNode', props.node.get('text'));
                                             var expanded = node.get('expanded');
                                             if (expanded) {
                                                 childNodes = <TreeLevel nodes={node.get('children')} level={props.level + 1}/>;
                                             }
                                             var icon = node.get('children').count() > 0 ? <span className="tree-icon"
                                                                                                 onClick={expandCollapse}>{(expanded
                                                     ? '-'
                                                     : '+')}</span> : undefined;
                                             return (
                                                     <li>
                                                         <div className={node.get('selected') ? 'tree-selected' : ''}>
                                                             {icon}
                                                             <span className="tree-label"
                                                                   onClick={select}>{node.get('text')}</span>
                                                         </div>
                                                         {childNodes}
                                                     </li>
                                             );
                                         }
                                     });

    var TreeLevel = (props) => {
        log.imsg(props.level, 'TreeLevel');
        if (props.nodes) {
            var childNodes = props.nodes.map((node) => <TreeNode key={node.get('id')} node={node} level={props.level}/>);
            return (
                    <ul>
                        {childNodes}
                    </ul>
            );
        }
    };

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
                                     log.msg('TreeView');
                                     return (
                                             <div className="tree">
                                                 <TreeLevel nodes={this.state.nodes} level={1}/>
                                             </div>
                                     );
                                 }
                             });
};
