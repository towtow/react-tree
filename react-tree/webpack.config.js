/*global require,module,__dirname*/
var path = require('path');

module.exports = {
    context: __dirname,

    entry: {
        'react-tree-app': path.resolve(__dirname, 'app/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),

        filename: '[name].js'
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
