import './index.html';
import './app.styl';

import log from './log';
import React from 'react';
import ReactDOM from 'react-dom';
import createTreeView from './components/createTreeView.js';
import createLogView from './components/createLogView.js';
import createNodeStore from './stores/NodeStore';
import createLogStore from './stores/LogStore';
import createTreeActionCreator from './actions/TreeActionCreator';
import TreeExampleData from './TreeExampleData';
import {Dispatcher} from 'flux';

var appDispatcher = new Dispatcher();

var nodeStore = createNodeStore(appDispatcher);
var logStore = createLogStore(appDispatcher);

var TreeView = createTreeView(appDispatcher, nodeStore);
ReactDOM.render(<TreeView />, window.document.getElementById('app'));
var Log = createLogView(appDispatcher, logStore);
ReactDOM.render(<Log />, window.document.getElementById('log'));

log.msg('Loading data...');
createTreeActionCreator(appDispatcher).loadData(TreeExampleData);
log.msg('...done!');
