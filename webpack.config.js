var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src');

module.exports = {
    entry: {
        main: APP_DIR + '/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};