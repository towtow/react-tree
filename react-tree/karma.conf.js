var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
                   browsers: ['PhantomJS', 'Chrome', 'Firefox'],
                   files: [{pattern: 'all-tests.js', watched: false}],
                   frameworks: ['es6-shim', 'jasmine'],
                   preprocessors: {
                       'all-tests.js': ['webpack', 'sourcemap']
                   },
                   reporters: ['dots'],
                   singleRun: false,
                   webpack: webpackConfig,
                   webpackServer: {
                       noInfo: true
                   }
               });
};
