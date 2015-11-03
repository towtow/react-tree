var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "app"), //
    resolve: {
        extensions: ["", ".js", ".css", ".styl"]
    }, //
    entry: {
        javascript: "./app.js", //
        html: "./index.html", //
        css: "./app.css"
    }, //
    devtool: "#source-map", //
    output: {
        filename: "app.js", //
        chunkFilename: "[id].js", //
        path: path.join(__dirname, "dist")
    }, //
    module: {
        loaders: [ //
            {test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"]}, //
            //{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}, //
            {test: /\.css$/, loader: 'style-loader!css-loader'}, //
            {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'}, //
            {test: /\.html$/, loader: "file?name=[name].[ext]"}]
    }, plugins: [new ExtractTextPlugin("app.css")]
};
