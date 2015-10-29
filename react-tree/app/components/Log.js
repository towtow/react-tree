import React from 'react';
import LogStore from '../stores/LogStore';

export default React.createClass({
    getInitialState: function () {
        return {log: LogStore.getLog()};
    }, onChange: function () {
        this.setState({log: LogStore.getLog()});
    }, componentDidMount: function () {
        LogStore.addListener(this.onChange);
    }, componentWillUnmount: function () {
        LogStore.removeListener(this.onChange);
    }, render: function () {
        var LogEntry = function (l) {
            return (
                    <li key={key++}>
                        <div>{l.key}</div>
                        <pre>{JSON.stringify(l.payload, null, 4)}</pre>
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
