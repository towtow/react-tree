import './TreeView.styl';

import React from 'react';
import createTreeActionCreator from '../actions/TreeActionCreator';
import Immutable from 'immutable';
import log from '../log';

export default (dispatcher, nodeStore) => {
    const TreeActionCreator = createTreeActionCreator(dispatcher);

    function getStoreState() {
        return {nodes: nodeStore.getState()};
    }

    const TreeNode = React.createClass({
                                           shouldComponentUpdate: function (nextProps) {
                                               return !Immutable.is(this.props.node, nextProps.node);
                                           },

                                           render: function () {
                                               const expandCollapse = (e) => {
                                                   TreeActionCreator.expandCollapse(nodeId);
                                                   e.stopPropagation();
                                               };

                                               const select = (e) => {
                                                   TreeActionCreator.select(nodeId);
                                                   e.stopPropagation();
                                               };

                                               const props = this.props;
                                               const node = props.node;
                                               const nodeId = node.get('id');
                                               log.imsg(props.level, 'TreeNode', props.node.get('text'));
                                               const expanded = node.get('expanded');
                                               let childNodes;
                                               if (expanded) {
                                                   childNodes = <TreeLevel nodes={node.get('children')} level={props.level + 1}/>;
                                               }
                                               const icon = node.get('children').count() > 0 ? <span className="tree-icon"
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

    const TreeLevel = React.createClass({
                                            shouldComponentUpdate: function (nextProps) {
                                                return !Immutable.is(this.props.nodes, nextProps.nodes);
                                            },

                                            render: function () {
                                                const props = this.props;
                                                log.imsg(props.level, 'TreeLevel');
                                                if (props.nodes) {
                                                    var childNodes = props.nodes.map((node) => <TreeNode key={node.get('id')}
                                                                                                         node={node}
                                                                                                         level={props.level}/>);
                                                    return (
                                                            <ul>
                                                                {childNodes}
                                                            </ul>
                                                    );
                                                }
                                            }
                                        });

    return React.createClass({
                                 getInitialState: function () {
                                     return getStoreState();
                                 },

                                 shouldComponentUpdate: function (nextProps, nextState) {
                                     return !Immutable.is(this.state.nodes, nextState.nodes);
                                 },

                                 onChange: function () {
                                     this.setState(getStoreState());
                                 },

                                 componentDidMount: function () {
                                     nodeStore.addListener(this.onChange);
                                 },

                                 componentWillUnmount: function () {
                                     nodeStore.removeListener(this.onChange);
                                 },

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
