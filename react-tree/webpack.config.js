var path = require('path');

var isDev = false;

module.exports = {
    context: path.join(__dirname, 'app'), //
    entry: {
        app: './app.js'
    }, //
    devtool: '#source-map', //
    output: {
        path: path.join(__dirname, 'dist'), filename: '[name].js', //
        chunkFilename: '[name][id].js', //
        publicPath: 'http://localhost:8080/'
    }, //
    module: {
        loaders: [ //
            {test: /\.js$/, exclude: /node_modules/, loaders: isDev ? ['react-hot', 'babel'] : ['babel']}, //
            {test: /\.styl$/, loader: 'style!css!stylus'}, //
            {test: /\.html$/, loader: 'file?name=[name].[ext]'}]
    }
};
