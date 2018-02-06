const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
const webpack = require("webpack");

const libName = 'index';

module.exports = {
    entry: {
        [`${libName}`]: './src/index.ts',
        [`${libName}.min`]: './src/index.ts',
    },
    watch: true,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        library: 'generate',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },

}
