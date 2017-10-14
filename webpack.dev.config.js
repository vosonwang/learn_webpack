const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');

fs.open('./src/config/env.js', 'w', function (err, fd) {
    const buf = 'export default "development";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer){});
});

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        proxy: {
            /*修改配置文件需要重启server才会有效*/
            '/profiles': {
                // target: 'http://192.168.31.163:5053',
                target: 'http://localhost:5000',
                changeOrigin: true
            },
            '/notes': {
                // target: 'http://192.168.31.163:5053',
                target: 'http://localhost:5000',
                changeOrigin: true
            },
            '/shortId':{
                // target: 'http://192.168.31.163:5053',
                target: 'http://localhost:5000',
                changeOrigin: true
            }
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/template/index.ejs',
            favicon:'./src/images/favicon.ico',
            inject: false,
            hash:true
        })
    ]
});