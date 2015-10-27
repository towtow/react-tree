var path = require("path");
var webpack = require("webpack");
module.exports = {
    context: path.join(__dirname, "app"),
    entry: {
        javascript: "./app.js",
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
            test: /\.html$/,
            loader: "file?name=[name].[ext]"
        }]
    }
};
