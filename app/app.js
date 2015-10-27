import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './components/TreeView';
import NodeStore from './stores/NodeStore';
import ViewerStore from './stores/ViewerStore';
import AppDispatcher from './dispatcher/AppDispatcher';

AppDispatcher.register(NodeStore.handleEvent);
AppDispatcher.register(ViewerStore.handleEvent);

ReactDOM.render(<TreeView />, document.getElementById('app'));
