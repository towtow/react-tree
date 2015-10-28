module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [{
            pattern: 'test.js',
            watched: false
        }],
        frameworks: ['jasmine'],
        preprocessors: {
            'test.js': ['webpack']
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
