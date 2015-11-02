import React from 'react';
import ReactDOM from 'react-dom';
import mkTreeView from './components/mkTreeView.react';
import mkLogView from './components/mkLogView.react';
import NodeStore from './stores/NodeStore';
import LogStore from './stores/LogStore';
import AppDispatcher from './dispatcher/AppDispatcher';

var TreeView = mkTreeView(NodeStore);
var Log = mkLogView(LogStore);
ReactDOM.render(<TreeView />, document.getElementById('app'));
ReactDOM.render(<Log />, document.getElementById('log'));
