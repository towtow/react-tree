module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'/*, 'Chrome', 'Firefox'*/],
        files: [{pattern: 'all-tests.js', watched: false}],
        frameworks: ['es5-shim', 'jasmine'],
        preprocessors: {
            'all-tests.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        singleRun: true,
        webpack: {
            module: {
                loaders: [{test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'}]
            }, devtool: 'inline-source-map', watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};
