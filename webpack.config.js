/**
 * Created by b1uew01f on 7/24/15.
 */

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var bower_dir = path.resolve(__dirname, 'bower_components');
var npm_dir = path.resolve(__dirname, 'node_modules');

var config = {
    addVendor: function (type, name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp('^' + name + '$'));
        if (type == 'js') {
            this.entry.vendors.push(name);
        }
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: '.',
        port: 8080
    },
    entry: {
        app: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080/',
            './app/main.jsx'
        ],
        vendors: []
    },
    resolve: {alias: {}},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost/build/'
    },
    module: {
        noParse: [],
        loaders: [
            {test: /\.jsx$/, loaders: ['babel-loader'], include: /app/},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=100000'},
            {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            {test: /\.gif$/, loader: "url-loader?mimetype=image/png"},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin( {url: 'http://localhost'} ),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin('app.css')
    ]
};

config.addVendor('js', 'zepto', bower_dir + '/zepto/zepto.min.js');

module.exports = config;
