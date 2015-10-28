import React from 'react';
import nodeStore from '../stores/NodeStore';
import TreeLevel from './TreeLevel';

export default React.createClass({
    getInitialState: function () {
        return {nodes: nodeStore.getNodes()};
    }, onChange: function () {
        this.setState({nodes: nodeStore.getNodes()});
    }, componentDidMount: function () {
        nodeStore.addListener(this.onChange);
    }, componentWillUnmount: function () {
        nodeStore.removeListener(this.onChange);
    }, render: function () {
        return (
                <div className="tree">
                    <TreeLevel nodes={this.state.nodes}/>
                </div>
        );
    }
});
