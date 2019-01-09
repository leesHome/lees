const merge = require('webpack-merge');
const base = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = merge(base, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});