/*global require,module,__dirname*/
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'app'),

    entry: {
        app: './app.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),

        filename: '[name].js',

        chunkFilename: '[name][id].js',

        publicPath: 'http://localhost:8686/'
    },

    module: {
        loaders: [ //
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}},

            {test: /\.styl$/, loader: 'style!css!stylus'},

            {test: /\.html$/, loader: 'file?name=[name].[ext]'}
        ]
    },

    devtool: '#source-map'
};
