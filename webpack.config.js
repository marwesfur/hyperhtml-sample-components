const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: [
        './src/index.ts'
    ],
    output: {
        path: path.join(__dirname, './src'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    plugins: [
        new WebpackNotifierPlugin({
            title: 'WebComponents + HyperHTML',
            alwaysNotify: true
        })
    ],
    devServer: {
        contentBase: './'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        mainFields: ['browserify', 'browser', 'module', 'main']
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}