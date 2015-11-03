import log from './log';
import React from 'react';
import ReactDOM from 'react-dom';
import mkTreeView from './components/mkTreeView.react';
import mkLogView from './components/mkLogView.react';
import mkNodeStore from './stores/NodeStore';
import mkLogStore from './stores/LogStore';
import mkTreeActionCreator from './actions/TreeActionCreator';
import TreeExampleData from './TreeExampleData';
import {Dispatcher} from 'flux';

require ('./app.css');

var appDispatcher = new Dispatcher();

var nodeStore = mkNodeStore(appDispatcher);
var logStore = mkLogStore(appDispatcher);

var TreeView = mkTreeView(appDispatcher, nodeStore);
ReactDOM.render(<TreeView />, document.getElementById('app'));
var Log = mkLogView(appDispatcher, logStore);
ReactDOM.render(<Log />, document.getElementById('log'));

log.msg('Loading data...');
mkTreeActionCreator(appDispatcher).loadData(TreeExampleData);
log.msg('...done!');
