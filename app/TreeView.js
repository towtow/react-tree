import React from 'react';
import TreeNode from './TreeNode';
import NodeStore from './NodeStore';

export default React.createClass({
    getInitialState: function () {
        return {countries: NodeStore.getNodes()};
    },
    onChange: function () {
        this.setState({countries: NodeStore.getNodes()});
    },
    componentDidMount: function () {
        NodeStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        NodeStore.removeChangeListener(this.onChange);
    },
    render: function () {
        var countries = this.state.countries;
        var nodes = countries.map(function (n) {
            return <TreeNode key={n.text} node={n} children={n.children}/>
        });
        return (
                <ul>
                    {nodes}
                </ul>
        );
    }
});
