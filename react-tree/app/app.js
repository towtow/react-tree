import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './components/TreeView';
import Log from './components/Log';
import NodeStore from './stores/NodeStore';
import LogStore from './stores/LogStore';
import AppDispatcher from './dispatcher/AppDispatcher';

ReactDOM.render(<TreeView />, document.getElementById('app'));
ReactDOM.render(<Log />, document.getElementById('log'));
