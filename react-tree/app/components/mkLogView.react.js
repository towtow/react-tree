/* globals JSON */
import React from 'react';

export default function (logStore) {
    return React.createClass({
        getInitialState: function () {
            return {log: logStore.getState()};
        }, //
        onChange: function () {
            this.setState({log: logStore.getState()});
        }, //
        componentDidMount: function () {
            logStore.addListener(this.onChange);
        }, //
        componentWillUnmount: function () {
            logStore.removeListener(this.onChange);
        }, //
        render: function () {
            var LogEntry = function (l) {
                return (
                        <li key={key++}>
                            {l.key} {JSON.stringify(l.payload)}
                        </li>
                );
            };
            var key = 0;
            var logEntries = this.state.log.reverse().map(LogEntry);
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
