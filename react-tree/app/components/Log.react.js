import React from 'react';
import LogStore from '../stores/LogStore';

export default React.createClass({
    getInitialState: function () {
        return {log: LogStore.getState()};
    }, onChange: function () {
        this.setState({log: LogStore.getState()});
    }, componentDidMount: function () {
        LogStore.addListener(this.onChange);
    }, componentWillUnmount: function () {
        LogStore.removeListener(this.onChange);
    }, render: function () {
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
