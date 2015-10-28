module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [{
            pattern: 'all-tests.js',
            watched: false
        }],
        frameworks: ['jasmine'],
        preprocessors: {
            'all-tests.js': ['webpack']
        },
        reporters: ['dots'],
        singleRun: true,
        webpack: {
            module: {
                loaders: [{
                    test: /\.js/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};
