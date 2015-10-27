var path = require("path");
var webpack = require("webpack");
module.exports = {
    context: path.join(__dirname, "app"),
    entry: {
        javascript: "./app.js",
        css: "./app.css",
        html: "./index.html"
    },
    devtool: "#source-map",
    output: {
        filename: "app.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["react-hot", "babel-loader"]
        }, {
            test: /\.css$/,
            loader: "file?name=[name].[ext]"
        }, {
            test: /\.html$/,
            loader: "file?name=[name].[ext]"
        }]
    }
};
