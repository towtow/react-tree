/* globals JSON */
import React from 'react';
import Immutable from 'immutable';

export default function (logStore) {
    function getStoreState() {
        return {log: logStore.getState()};
    }

    var LogEntry = React.createClass({
        shouldComponentUpdate: function (nextProps, nextState) {
            return !Immutable.is(this.props.l, nextProps.l);
        }, //
        render: function () {
            var props = this.props;
            console.log('> LogEntry ' + props.l.get('key'));
            return (
                    <li>
                        {props.l.get('key')} {JSON.stringify(props.l)}
                    </li>
            );
        }
    });

    return React.createClass({
        getInitialState: function () {
            return getStoreState();
        }, //
        onChange: function () {
            this.setState(getStoreState());
        }, //
        componentDidMount: function () {
            logStore.addListener(this.onChange);
        }, //
        componentWillUnmount: function () {
            logStore.removeListener(this.onChange);
        }, //
        render: function () {
            console.log('> LogView');
            var key = 0;
            var logEntries = this.state.log.map((l) => <LogEntry key={key++} l={l}/>).reverse();
            return (
                    <div className="log">
                        <ul>
                            {logEntries}
                        </ul>
                    </div>
            );
        }
    });
};
