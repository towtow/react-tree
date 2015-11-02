import log from './log';
import React from 'react';
import ReactDOM from 'react-dom';
import mkTreeView from './components/mkTreeView.react';
import mkLogView from './components/mkLogView.react';
import NodeStore from './stores/NodeStore';
import LogStore from './stores/LogStore';
import TreeActionCreator from './actions/TreeActionCreator';
import TreeExampleData from './TreeExampleData';

var TreeView = mkTreeView(NodeStore);
ReactDOM.render(<TreeView />, document.getElementById('app'));

var Log = mkLogView(LogStore);
ReactDOM.render(<Log />, document.getElementById('log'));

log.msg('Loading data...');
TreeActionCreator.loadData(TreeExampleData);
log.msg('...done!');
